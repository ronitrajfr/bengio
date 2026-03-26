import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";

import { v } from "convex/values";

const sessionStatus = v.union(
  v.literal("pending"),
  v.literal("running"),
  v.literal("completed"),
  v.literal("failed"),
);

const personaType = v.union(
  v.literal("guest"),
  v.literal("new_user"),
  v.literal("power_user"),
  v.literal("tester_bot"),
);

const issueType = v.union(
  v.literal("bug"),
  v.literal("ux"),
  v.literal("performance"),
  v.literal("confusion"),
);

const severity = v.union(
  v.literal("low"),
  v.literal("medium"),
  v.literal("high"),
  v.literal("critical"),
);

const schema = defineSchema({
  ...authTables,

  sessions: defineTable({
    url: v.string(),
    goal: v.string(),

    persona: personaType,
    status: sessionStatus,

    userId: v.id("users"),

    startedAt: v.optional(v.number()),
    completedAt: v.optional(v.number()),
    createdAt: v.number(),

    reportId: v.optional(v.id("reports")),
  })
    .index("by_user", ["userId"])
    .index("by_status", ["status"])
    .index("by_createdAt", ["createdAt"]),

  steps: defineTable({
    sessionId: v.id("sessions"),
    stepNumber: v.number(),

    action: v.string(), // "click login", "type email", etc
    url: v.string(),

    screenshotId: v.optional(v.id("_storage")),

    issues: v.optional(
      v.array(
        v.object({
          type: issueType,
          message: v.string(),

          severity: severity,

          context: v.optional(
            v.object({
              element: v.optional(v.string()),
              expected: v.optional(v.string()),
              actual: v.optional(v.string()),
            }),
          ),
        }),
      ),
    ),
  })
    .index("by_session", ["sessionId"])
    .index("by_session_step", ["sessionId", "stepNumber"]),

  reports: defineTable({
    sessionId: v.id("sessions"),

    summary: v.string(),

    bugs: v.array(
      v.object({
        title: v.string(),
        severity: severity,
        stepsToReproduce: v.array(v.string()),
      }),
    ),

    uxIssues: v.array(v.string()),
    featureGaps: v.array(v.string()),
    omissions: v.array(v.string()),
    suggestions: v.array(v.string()),

    score: v.optional(
      v.object({
        ux: v.number(), // 0–10
        performance: v.number(),
        reliability: v.number(),
      }),
    ),

    slug: v.string(),
  })
    .index("by_session", ["sessionId"])
    .index("by_slug", ["slug"]),
});

export default schema;
