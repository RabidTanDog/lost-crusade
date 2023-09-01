---
id: rebound
title: Rebound
heroes: ["garadon", "narses", "kastor", "alastor"]
strongAgainst:
  [
    {
      id: "dodge-wall",
      reason: "Single troop lines will kill themselves when they attack.",
    },
  ]
weakAgainst:
  [{ id: "splash", reason: "Bonus hits from Splash do not trigger Rebound." }]
note: "Silvissa has a skill that reduces Rebound damage received."
---

When troops attack, a percentage of their damage Rebounds back at the attacker.

[todo: image]

The multiplier is -10% per level difference of the troop being damaged; capping at 50%.

[todo: image]

For example, if you have 30% rebound and your T7 are being attacked by T9 enemies, you will only reflect 24% damage.
