// Learning objectives for Class 9 (hand-written pilot chapters). Format: see CONTENT_GUIDE.md.
StudyData.addObjectives(9, {
  science: {
    "describing-motion-around-us": [
      {
        id: "distance-displacement",
        text: "I can use a reference point to describe position, and tell distance (scalar) from displacement (vector), including cases where displacement is zero.",
        topics: ["Position, Distance and Displacement"],
        level: "understand",
        prereq: ["8/science/exploring-forces", "7/science/measurement-of-time-and-motion", "6/science/measurement-of-length-and-motion"],
        mistakes: [
          { id: "distance-equals-displacement", text: "Taking distance and displacement as the same quantity.", fix: "Distance is the whole path length and has no direction. Displacement is the straight-line change in position with direction, so it can be zero after a round trip." },
          { id: "no-reference", text: "Saying an object is moving or at rest without naming a reference point.", fix: "Motion is always described with respect to a reference point; a person can be at rest relative to a bus and moving relative to the road." }
        ]
      },
      {
        id: "speed-velocity-acceleration",
        text: "I can calculate average speed, average velocity and average acceleration, and convert km h⁻¹ to m s⁻¹.",
        topics: ["Speed, Velocity and Acceleration"],
        level: "apply",
        prereq: ["9/science/describing-motion-around-us#distance-displacement"],
        mistakes: [
          { id: "speed-velocity", text: "Dividing distance by time and calling the result velocity.", fix: "Average velocity = displacement ÷ time. Dividing distance by time gives average speed." },
          { id: "kmh-conversion", text: "Converting km h⁻¹ to m s⁻¹ by multiplying by 18/5.", fix: "Multiply by 5/18. For example 36 km h⁻¹ = 36 × 5/18 = 10 m s⁻¹." },
          { id: "zero-v-zero-a", text: "Saying acceleration is zero whenever velocity is zero.", fix: "Acceleration is the rate of change of velocity. A ball at the top of its throw has zero velocity for an instant but still accelerates at about 9.8 m s⁻² downwards." }
        ]
      },
      {
        id: "motion-graphs",
        text: "I can read position-time and velocity-time graphs: slope, being at rest and area under the graph.",
        topics: ["Graphs of Motion"],
        level: "analyse",
        prereq: ["9/maths/orienting-yourself-the-use-of-coordinates"],
        mistakes: [
          { id: "graph-picture", text: "Reading a position-time graph as the path the object follows.", fix: "The graph shows position against time, not a picture of the path. A horizontal line means the object is at rest." },
          { id: "slope-mixup", text: "Using the slope of a velocity-time graph as velocity, or the slope of a position-time graph as acceleration.", fix: "Slope of position-time = velocity. Slope of velocity-time = acceleration. Area under velocity-time = displacement." }
        ]
      },
      {
        id: "kinematic-equations",
        text: "I can use v = u + at, s = ut + ½at² and v² = u² + 2as for straight-line motion with constant acceleration.",
        topics: ["Kinematic Equations"],
        level: "apply",
        prereq: ["9/science/describing-motion-around-us#speed-velocity-acceleration"],
        mistakes: [
          { id: "braking-sign", text: "Putting a positive value of a for a braking vehicle.", fix: "Choose the direction of motion as positive. A braking vehicle has a negative acceleration, and its final velocity v is 0 at stopping." },
          { id: "stopping-distance", text: "Thinking that doubling the speed doubles the stopping distance.", fix: "From v² = u² + 2as with v = 0, the distance depends on u². Doubling the speed makes the stopping distance 4 times larger." }
        ]
      },
      {
        id: "circular-motion",
        text: "I can explain why uniform circular motion is accelerated even though the speed is constant.",
        topics: ["Uniform Circular Motion"],
        level: "understand",
        mistakes: [
          { id: "constant-speed-no-a", text: "Saying there is no acceleration because the speed is constant.", fix: "The direction of the velocity keeps changing, so the velocity changes and the motion is accelerated." },
          { id: "velocity-radial", text: "Drawing the velocity along the radius.", fix: "At any point the velocity is along the tangent to the circle." }
        ]
      }
    ]
  },
  english: {
    tenses: [
      {
        id: "present-tenses",
        text: "I can choose between the simple present, present continuous and present perfect for habits, actions in progress and past actions that matter now.",
        topics: ["Present tenses"],
        level: "apply",
        prereq: ["8/english/tense-revision", "7/english/perfect-tenses"],
        mistakes: [
          { id: "continuous-habit", text: "Using the present continuous for a routine, as in \"She is walking to school every day.\"", fix: "Use the simple present for habits and routines: \"She walks to school every day.\"" }
        ]
      },
      {
        id: "past-tenses",
        text: "I can choose between the simple past, past continuous and past perfect to show the order of past events.",
        topics: ["Past tenses"],
        level: "apply",
        prereq: ["7/english/perfect-tenses"],
        mistakes: [
          { id: "perfect-with-time", text: "Using the present perfect with a finished time, as in \"I have seen him yesterday.\"", fix: "A stated past time (yesterday, last week, ago) needs the simple past: \"I saw him yesterday.\"" },
          { id: "interrupted-action", text: "Using the simple past for both actions in \"I read when the lights went out.\"", fix: "The action in progress takes the past continuous: \"I was reading when the lights went out.\"" }
        ]
      },
      {
        id: "future-forms",
        text: "I can use will/shall, be going to, will be + V-ing and will have + V3 to express predictions, plans and actions that will be complete.",
        topics: ["Future forms"],
        level: "apply",
        mistakes: [
          { id: "will-in-time-clause", text: "Using will after if or when in a time or condition clause, as in \"If it will rain, we will stay in.\"", fix: "Use the simple present in the if/when clause: \"If it rains, we will stay in.\"" }
        ]
      },
      {
        id: "time-signals",
        text: "I can use time words such as yesterday, ago, since, for, just, already and yet to decide the right tense.",
        topics: ["Time words that decide the tense"],
        level: "analyse",
        mistakes: [
          { id: "since-for", text: "Using since with a length of time, as in \"since three days\".", fix: "Since goes with a point of time (since Monday); for goes with a length of time (for three days)." }
        ]
      },
      {
        id: "tense-errors",
        text: "I can spot and correct common tense errors, such as stative verbs in the continuous and wrong verb forms after did or does.",
        topics: ["Common errors to avoid"],
        level: "analyse",
        prereq: ["9/english/tenses#time-signals"],
        mistakes: [
          { id: "stative-continuous", text: "Writing \"I am knowing the answer.\"", fix: "Stative verbs such as know, believe, like, want and own are rarely used in the continuous: \"I know the answer.\"" },
          { id: "did-v2", text: "Writing \"He did not went.\"", fix: "After do, does and did, use the base form of the verb: \"He did not go.\"" }
        ]
      }
    ]
  }
});
