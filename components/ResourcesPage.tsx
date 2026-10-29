"use client";

import { useState, useMemo, FormEvent } from "react";

type ResourceType = "Lesson Plan" | "Resource";
type AgeGroup = "3–4 years" | "4–5 years" | "5–6 years" | "4–6 years";
type CoreSkill = "Empathy" | "Navigating Difference" | "Long-term Thinking" | "Cooperation";

interface Resource {
  id: string;
  title: string;
  author?: string;
  type: ResourceType;
  ageGroups: AgeGroup[];
  skills: CoreSkill[];
  blurb: string;
  file?: string;
}

const RESOURCES: Resource[] = [
  {
    id: "ask-the-grown-ups",
    title: "Ask the Grown-Ups",
    type: "Lesson Plan",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Cooperation", "Long-term Thinking"],
    blurb: "Children interview adults in their community about how things work and how decisions get made. Builds curiosity about civic life and the idea that asking questions is a form of participation.",
    file: "/resources/Lesson Plan - Ask the Grown-Ups.pdf",
  },
  {
    id: "class-meeting",
    title: "Class Meeting",
    type: "Lesson Plan",
    ageGroups: ["4–6 years"],
    skills: ["Cooperation", "Navigating Difference"],
    blurb: "A structured routine for the whole group to raise concerns, share ideas, and make decisions together. Introduces the mechanics of deliberation in a familiar, everyday setting.",
    file: "/resources/Lesson Plan - Class Meeting.pdf",
  },
  {
    id: "closing-the-loop",
    title: "Closing the Loop",
    type: "Lesson Plan",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Long-term Thinking", "Cooperation"],
    blurb: "Children revisit a decision or project they made earlier and check whether it worked. Practises the habit of following through and taking responsibility for outcomes over time.",
    file: "/resources/Lesson Plan - Closing the Loop.pdf",
  },
  {
    id: "designing-the-future",
    title: "Designing the Future We Want",
    type: "Lesson Plan",
    ageGroups: ["5–6 years"],
    skills: ["Long-term Thinking", "Cooperation"],
    blurb: "Children imagine and design a better version of their classroom, playground, or community. Develops the capacity to think beyond the present and take ownership of collective futures.",
    file: "/resources/Lesson Plan - Designing the Future We Want.pdf",
  },
  {
    id: "everybodys-way",
    title: "Everybody's Way Is Welcome",
    type: "Lesson Plan",
    ageGroups: ["3–4 years", "4–5 years"],
    skills: ["Navigating Difference", "Empathy"],
    blurb: "Explores how different families and communities do the same things in different ways. Builds comfort with difference and the understanding that there is rarely only one right way.",
    file: "/resources/Lesson Plan - Everybody's Way Is Welcome.pdf",
  },
  {
    id: "family-sharing-circle",
    title: "Family Sharing Circle",
    type: "Lesson Plan",
    ageGroups: ["3–4 years", "4–5 years"],
    skills: ["Empathy", "Cooperation"],
    blurb: "Children share something meaningful from their home life, and the group practises listening without interrupting. Strengthens belonging and introduces the idea that everyone's story has value.",
    file: "/resources/Lesson Plan - Family Sharing Circle.pdf",
  },
  {
    id: "group-mural",
    title: "Group Mural",
    type: "Lesson Plan",
    ageGroups: ["4–6 years"],
    skills: ["Cooperation"],
    blurb: "The whole group creates a single artwork together, negotiating space, colour, and ideas as they go. A concrete experience of what it means to share a commons and work toward a shared outcome.",
    file: "/resources/Lesson Plan - Group Mural .pdf",
  },
  {
    id: "idea-basket",
    title: "Idea Basket",
    type: "Lesson Plan",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Cooperation", "Navigating Difference"],
    blurb: "Children contribute ideas to a shared basket and then sort, discuss, and prioritise them together. Practises the democratic skill of aggregating individual preferences into group decisions.",
    file: "/resources/Lesson Plan - Idea Basket.pdf",
  },
  {
    id: "letter-to-future-us",
    title: "Letter to Future Us",
    type: "Lesson Plan",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Long-term Thinking"],
    blurb: "Children write or draw a message to their future selves and the children who will use this room after them. Builds the habit of thinking beyond the immediate and caring about those who come next.",
    file: "/resources/Lesson Plan - Letter to Future Us .pdf",
  },
  {
    id: "many-ways-one-thing",
    title: "Many Ways to Do One Thing",
    type: "Lesson Plan",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Navigating Difference"],
    blurb: "Children discover multiple solutions to the same problem, then consider the pros and cons of each. Develops tolerance for ambiguity and appreciation for diverse approaches.",
    file: "/resources/Lesson Plan - Many Ways to Do One Thing.pdf",
  },
  {
    id: "many-ways-to-say-it",
    title: "Many Ways to Say It",
    type: "Lesson Plan",
    ageGroups: ["3–4 years", "4–5 years"],
    skills: ["Navigating Difference", "Empathy"],
    blurb: "Children explore how the same feeling or idea can be expressed in many different ways across languages, bodies, and cultures. Builds linguistic empathy and respect for different modes of communication.",
    file: "/resources/Lesson Plan - Many Ways to Say It.pdf",
  },
  {
    id: "mirrors-and-windows",
    title: "Mirrors and Windows",
    type: "Lesson Plan",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Empathy", "Navigating Difference"],
    blurb: "Children explore stories and images that reflect their own lives (mirrors) and those that show them others' (windows). Builds the capacity to both see themselves in the world and imagine others' experiences.",
    file: "/resources/Lesson Plan - Mirrors and Windows.pdf",
  },
  {
    id: "noticing-the-room",
    title: "Noticing the Room",
    type: "Lesson Plan",
    ageGroups: ["3–4 years", "4–5 years"],
    skills: ["Empathy"],
    blurb: "A quiet observation practice where children pay attention to how others in the room are feeling, without being asked to fix or respond. The first step in developing civic empathy.",
    file: "/resources/Lesson Plan - Noticing the Room.pdf",
  },
  {
    id: "our-talking-circle",
    title: "Our Talking Circle",
    type: "Lesson Plan",
    ageGroups: ["4–6 years"],
    skills: ["Cooperation", "Empathy"],
    blurb: "A regular circle practice using a talking piece to ensure every voice is heard in sequence. Introduces the norms of fair process: one speaker, active listening, no interruptions.",
    file: "/resources/Lesson Plan - Our Talking Circle.pdf",
  },
  {
    id: "planting-something-slow",
    title: "Planting Something Slow",
    type: "Lesson Plan",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Long-term Thinking"],
    blurb: "Children plant seeds or bulbs and commit to caring for them over weeks. A tangible experience of delayed gratification and intergenerational responsibility.",
    file: "/resources/Lesson Plan - Planting Something Slow .pdf",
  },
  {
    id: "reading-babys-signals",
    title: "Reading the Baby's Signals",
    type: "Lesson Plan",
    ageGroups: ["3–4 years", "4–5 years"],
    skills: ["Empathy"],
    blurb: "Using images or video of babies, children practise reading non-verbal cues and inferring how someone else is feeling. Builds the foundational skill of perspective-taking without words.",
    file: "/resources/Lesson Plan - Reading the Baby's Signals.pdf",
  },
  {
    id: "repair-practice",
    title: "Repair Practice",
    type: "Lesson Plan",
    ageGroups: ["4–6 years"],
    skills: ["Cooperation", "Navigating Difference"],
    blurb: "When something goes wrong in the group, children work through a structured repair process together. Practises the democratic skill of conflict resolution and restoration over punishment.",
    file: "/resources/Lesson Plan - Repair Practice.pdf",
  },
  {
    id: "role-swap",
    title: "Role Swap",
    type: "Lesson Plan",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Empathy", "Navigating Difference"],
    blurb: "Children take on different roles in a familiar scenario and reflect on how it feels from the other side. A concrete way to experience perspective-taking and develop genuine empathy.",
    file: "/resources/Lesson Plan - Role Swap.pdf",
  },
  {
    id: "same-problem-different-solutions",
    title: "Same Problem, Different Solutions",
    type: "Lesson Plan",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Navigating Difference", "Cooperation"],
    blurb: "Children are presented with the same problem and generate different solutions in small groups, then share across the group. Builds appreciation for plural approaches and the value of diverse thinking.",
    file: "/resources/Lesson Plan - Same Problem, Different Solutions.pdf",
  },
  {
    id: "care-project",
    title: "The Care Project",
    type: "Lesson Plan",
    ageGroups: ["5–6 years"],
    skills: ["Empathy", "Long-term Thinking"],
    blurb: "Children identify something in their community that needs care and commit to looking after it over several weeks. Develops a sense of civic responsibility and care for shared spaces.",
    file: "/resources/Lesson Plan - The Care Project .pdf",
  },
  {
    id: "comfort-kit",
    title: "The Comfort Kit",
    type: "Lesson Plan",
    ageGroups: ["3–4 years", "4–5 years"],
    skills: ["Empathy"],
    blurb: "Children build a kit of items that bring comfort and then consider what would comfort others. Moves from self-awareness to other-awareness, a key step in civic empathy.",
    file: "/resources/Lesson Plan - The Comfort Kit.pdf",
  },
  {
    id: "consequence-chain",
    title: "The Consequence Chain",
    type: "Lesson Plan",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Long-term Thinking"],
    blurb: "Children trace the downstream effects of a single action through a visual chain. Builds systems thinking and the understanding that decisions have consequences that ripple outward.",
    file: "/resources/Lesson Plan - The Consequence Chain.pdf",
  },
  {
    id: "feelings-detective",
    title: "The Feelings Detective",
    type: "Lesson Plan",
    ageGroups: ["3–4 years", "4–5 years"],
    skills: ["Empathy"],
    blurb: "Children become detectives who use clues — body language, tone, context — to figure out how someone is feeling. An engaging introduction to the cognitive dimension of empathy.",
    file: "/resources/Lesson Plan - The Feelings Detective.pdf",
  },
  {
    id: "helper-conversation",
    title: "The Helper Conversation",
    type: "Lesson Plan",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Cooperation"],
    blurb: "Children practise asking for help and offering it using structured language prompts. Builds the social norms of reciprocity and mutual support that underpin cooperative communities.",
    file: "/resources/Lesson Plan - The Helper Conversation.pdf",
  },
  {
    id: "impossible-alone-task",
    title: "The Impossible-Alone Task",
    type: "Lesson Plan",
    ageGroups: ["4–6 years"],
    skills: ["Cooperation"],
    blurb: "A task deliberately designed so that no single child can complete it alone. Makes the necessity of collaboration concrete and experiential rather than told.",
    file: "/resources/Lesson Plan - The Impossible-Alone Task.pdf",
  },
  {
    id: "right-to-be-heard",
    title: "The Right to Be Heard",
    type: "Lesson Plan",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Cooperation", "Navigating Difference"],
    blurb: "Children explore what it means for everyone to have a voice, including those who speak quietly or differently. Introduces the democratic idea of voice and the group's responsibility to make space for it.",
    file: "/resources/Lesson Plan - The Right to Be Heard.pdf",
  },
  {
    id: "we-built-something-together",
    title: "We Built Something Together",
    type: "Lesson Plan",
    ageGroups: ["4–6 years"],
    skills: ["Cooperation"],
    blurb: "A reflection session after a collaborative project, where children articulate what worked, what was hard, and what they made possible together. Builds the habit of civic reflection.",
    file: "/resources/Lesson Plan - We Built Something Together.pdf",
  },
  {
    id: "who-comes-after-us",
    title: "Who Comes After Us?",
    type: "Lesson Plan",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Long-term Thinking"],
    blurb: "Children think about who will use their room, their school, or their park in the future and what they would want to leave for them. Builds intergenerational thinking as a civic habit.",
    file: "/resources/Lesson Plan - Who Comes After Us? .pdf",
  },
  {
    id: "yes-no-maybe-later",
    title: "Yes, No, Maybe Later",
    type: "Lesson Plan",
    ageGroups: ["3–4 years", "4–5 years"],
    skills: ["Navigating Difference"],
    blurb: "Children practise expressing preferences and hearing disagreement through structured scenarios. Builds comfort with saying no and hearing it — a foundational skill for democratic participation.",
    file: "/resources/Lesson Plan - Yes, No, Maybe Later.pdf",
  },
  {
    id: "you-choose-the-way",
    title: "You Choose the Way",
    type: "Lesson Plan",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Navigating Difference", "Cooperation"],
    blurb: "Children are given a shared goal but multiple paths to reach it, and must agree on which to take. Practises the process of group decision-making and respecting the outcome of a collective choice.",
    file: "/resources/Lesson Plan - You Choose the Way.pdf",
  },
  // Book recommendations — Empathy
  {
    id: "book-blue-kind-of-day",
    title: "A Blue Kind of Day",
    author: "Rachel Tomlinson & Tori-Jay Mordey",
    type: "Resource",
    ageGroups: ["3–4 years", "4–5 years"],
    skills: ["Empathy"],
    blurb: "A gentle story about a child having a hard day, and the people who notice and sit with them. A beautiful entry point for conversations about emotional recognition and compassionate presence.",
  },
  {
    id: "book-rose-meets-mr-wintergarden",
    title: "Rose Meets Mr Wintergarden",
    author: "Bob Graham",
    type: "Resource",
    ageGroups: ["3–4 years", "4–5 years"],
    skills: ["Empathy"],
    blurb: "A small act of courage leads to an unexpected friendship across generations. Explores how reaching out to someone different can transform both people.",
  },
  {
    id: "book-lottie-and-walter",
    title: "Lottie and Walter",
    author: "Anna Walker",
    type: "Resource",
    ageGroups: ["3–4 years", "4–5 years"],
    skills: ["Empathy"],
    blurb: "A tender story about a girl and a stray cat, and the quiet ways we notice and care for one another. Opens conversations about attentiveness and care.",
  },
  {
    id: "book-home-in-the-rain",
    title: "Home in the Rain",
    author: "Bob Graham",
    type: "Resource",
    ageGroups: ["3–4 years", "4–5 years"],
    skills: ["Empathy"],
    blurb: "On a rainy drive, a family witnesses a small moment of kindness from a stranger. Shows children that empathy can be expressed in fleeting, everyday gestures.",
  },
  {
    id: "book-how-to-heal-a-broken-wing",
    title: "How to Heal a Broken Wing",
    author: "Bob Graham",
    type: "Resource",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Empathy"],
    blurb: "A boy in a busy city notices an injured bird that no one else sees, and quietly cares for it. A story about the power of paying attention and taking responsibility for what we notice.",
  },
  {
    id: "book-vanilla-ice-cream",
    title: "Vanilla Ice Cream",
    author: "Bob Graham",
    type: "Resource",
    ageGroups: ["3–4 years", "4–5 years"],
    skills: ["Empathy"],
    blurb: "A sparrow's journey from India to Australia unfolds alongside a child's ordinary day. A story about invisible connections and the lives happening just beyond what we see.",
  },
  // Book recommendations — Navigating Difference
  {
    id: "book-room-on-our-rock",
    title: "Room on Our Rock",
    author: "Kate & Jol Temple",
    type: "Resource",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Navigating Difference", "Cooperation"],
    blurb: "A clever book that reads two ways — a story about welcoming others or turning them away, depending on direction. Sparks rich conversation about inclusion and how we tell our stories.",
  },
  {
    id: "book-i-love-me",
    title: "I Love Me",
    author: "Sally Morgan",
    type: "Resource",
    ageGroups: ["3–4 years", "4–5 years"],
    skills: ["Navigating Difference"],
    blurb: "A joyful celebration of Aboriginal identity and self-acceptance. Affirms children's sense of self and introduces the idea that every identity is something to be proud of.",
  },
  {
    id: "book-hello",
    title: "Hello",
    author: "Tony Flowers",
    type: "Resource",
    ageGroups: ["3–4 years", "4–5 years"],
    skills: ["Navigating Difference"],
    blurb: "A simple, warm story about greeting someone new. Explores the small brave act of saying hello across difference, and the connection it can open.",
  },
  {
    id: "book-cooee-mittigar",
    title: "Cooee Mittigar",
    author: "Jasmine Seymour & Leanne Mulgo Watson",
    type: "Resource",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Navigating Difference"],
    blurb: "A bilingual Darug and English story about a girl who walks between two worlds. Celebrates cultural knowledge and the richness of speaking more than one language.",
  },
  {
    id: "book-family",
    title: "Family",
    author: "Aunty Fay Muir & Sue Lawson, illus. Jasmine Seymour",
    type: "Resource",
    ageGroups: ["3–4 years", "4–5 years"],
    skills: ["Navigating Difference"],
    blurb: "Celebrates the many shapes a family can take, centred in Aboriginal experience. Opens conversations about belonging and the different ways love and community look.",
  },
  {
    id: "book-an-aussie-year",
    title: "An Aussie Year",
    author: "Tania McCartney",
    type: "Resource",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Navigating Difference"],
    blurb: "Twelve children from across Australia share how their year looks — their seasons, food, celebrations, and routines. A window into the diversity of Australian life.",
  },
  {
    id: "book-little-school",
    title: "Little School",
    author: "Beth Norling",
    type: "Resource",
    ageGroups: ["3–4 years", "4–5 years"],
    skills: ["Navigating Difference"],
    blurb: "A small school bus travels through a landscape of different children, each navigating their own version of going to school. A gentle invitation to notice difference without judgement.",
  },
  // Book recommendations — Long-term Thinking
  {
    id: "book-big-rain-coming",
    title: "Big Rain Coming",
    author: "Katrina Germein & Bronwyn Bancroft",
    type: "Resource",
    ageGroups: ["3–4 years", "4–5 years"],
    skills: ["Long-term Thinking"],
    blurb: "A community waits patiently for rain across a hot, dry stretch of days. Builds the language of waiting, anticipation, and collective hope for something that will come in its own time.",
  },
  {
    id: "book-where-the-forest-meets-the-sea",
    title: "Where the Forest Meets the Sea",
    author: "Jeannie Baker",
    type: "Resource",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Long-term Thinking"],
    blurb: "A boy explores an ancient rainforest and imagines the children who might have played there long ago — and wonders if the forest will still be there for children in the future. A powerful provocation about environmental care across time.",
  },
  {
    id: "book-afloat",
    title: "Afloat",
    author: "Kirli Saunders & Freya Blackwood",
    type: "Resource",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Long-term Thinking"],
    blurb: "A lyrical story about flood, Country, and the resilience of the land and its people. Opens conversations about climate, place, and our responsibilities to the natural world.",
  },
  {
    id: "book-sharing-long",
    title: "Sharing",
    author: "Aunty Fay Muir & Sue Lawson",
    type: "Resource",
    ageGroups: ["3–4 years", "4–5 years"],
    skills: ["Long-term Thinking", "Cooperation"],
    blurb: "An Aboriginal story about sharing — of food, of Country, of knowledge across generations. A grounding for conversations about what it means to care for something beyond yourself.",
  },
  {
    id: "book-all-i-want-for-christmas-is-rain",
    title: "All I Want for Christmas Is Rain",
    author: "Cori Brooke & Megan Forward",
    type: "Resource",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Long-term Thinking"],
    blurb: "A child on a drought-affected farm wishes for rain instead of presents. A moving entry point for thinking about seasons, scarcity, and what communities most need over time.",
  },
  {
    id: "book-jigsaw-long",
    title: "Jigsaw: A Puzzle in the Post",
    author: "Bob Graham",
    type: "Resource",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Long-term Thinking", "Cooperation"],
    blurb: "A jigsaw puzzle travels the world, piece by piece, connecting strangers across time and distance. A beautiful metaphor for how small contributions build something larger than any one person.",
  },
  // Book recommendations — Cooperation
  {
    id: "book-the-concrete-garden",
    title: "The Concrete Garden",
    author: "Bob Graham",
    type: "Resource",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Cooperation"],
    blurb: "Neighbours come together to transform a neglected urban space into something shared and beautiful. A story about what becomes possible when a community works toward a common purpose.",
  },
  {
    id: "book-a-bus-called-heaven",
    title: "A Bus Called Heaven",
    author: "Bob Graham",
    type: "Resource",
    ageGroups: ["4–5 years", "5–6 years"],
    skills: ["Cooperation"],
    blurb: "A broken-down bus becomes a community gathering place, cared for by the neighbourhood. Shows children how shared stewardship of a common space can build connection and belonging.",
  },
];

const SKILL_COLORS: Record<CoreSkill, string> = {
  "Empathy": "bg-pink-brand/15 text-pink-brand border-pink-brand/30",
  "Navigating Difference": "bg-amber-brand/15 text-amber-700 border-amber-brand/30",
  "Long-term Thinking": "bg-coral/10 text-coral border-coral/30",
  "Cooperation": "bg-sage/15 text-sage border-sage/30",
};

const TYPE_COLORS: Record<ResourceType, string> = {
  "Lesson Plan": "bg-blue-brand text-white",
  "Resource": "bg-navy text-cream",
};

const ALL_AGE_GROUPS: AgeGroup[] = ["3–4 years", "4–5 years", "5–6 years", "4–6 years"];
const ALL_SKILLS: CoreSkill[] = ["Empathy", "Navigating Difference", "Long-term Thinking", "Cooperation"];
const ALL_TYPES: ResourceType[] = ["Lesson Plan", "Resource"];

type FeedbackState = "idle" | "loading" | "success" | "error";

function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", lesson: "", feedback: "" });
  const [state, setState] = useState<FeedbackState>("idle");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.feedback.trim()) return;
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: "Resource feedback",
          message: `Lesson/resource: ${form.lesson || "Not specified"}\n\n${form.feedback}`,
        }),
      });
      if (res.ok) {
        setState("success");
        setForm({ name: "", email: "", lesson: "", feedback: "" });
      } else {
        setError("Something went wrong. Please try again.");
        setState("error");
      }
    } catch {
      setError("Network error. Please try again.");
      setState("error");
    }
  };

  return (
    <section className="bg-navy py-20" id="feedback">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10 space-y-3">
          <span className="inline-block bg-white/10 text-cream/80 font-bold text-sm px-4 py-1.5 rounded-full uppercase tracking-wide">
            Educator Feedback
          </span>
          <h2 className="text-4xl font-black text-cream">
            Tell us how it went.
          </h2>
          <p className="text-cream/60 text-lg leading-relaxed">
            Used one of these in your setting? We&apos;d love to hear what worked, what didn&apos;t, and what you noticed in the children.
          </p>
          <a
            href="/resources/Observation Feedback and Notes.docx"
            download
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition text-cream font-bold text-sm px-5 py-2.5 rounded-full mt-2"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v11" />
            </svg>
            Download observation notes template
          </a>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          {state === "success" ? (
            <div className="text-center py-8 space-y-3">
              <div className="text-5xl">🌱</div>
              <h3 className="text-2xl font-black text-cream">Thank you!</h3>
              <p className="text-cream/60">Your feedback helps us improve the program for every educator.</p>
              <button onClick={() => setState("idle")} className="mt-4 text-amber-brand font-bold underline underline-offset-4">
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && <p className="text-coral text-sm font-semibold">{error}</p>}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fb-name" className="block text-sm font-bold text-cream/80 mb-1.5">Your name <span className="text-coral">*</span></label>
                  <input
                    id="fb-name" name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full rounded-xl border-2 border-white/10 bg-white/5 px-4 py-2.5 text-cream placeholder:text-cream/25 focus:outline-none focus:border-amber-brand transition"
                  />
                </div>
                <div>
                  <label htmlFor="fb-email" className="block text-sm font-bold text-cream/80 mb-1.5">Email <span className="text-coral">*</span></label>
                  <input
                    id="fb-email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full rounded-xl border-2 border-white/10 bg-white/5 px-4 py-2.5 text-cream placeholder:text-cream/25 focus:outline-none focus:border-amber-brand transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="fb-lesson" className="block text-sm font-bold text-cream/80 mb-1.5">Which lesson or resource?</label>
                <select
                  id="fb-lesson" name="lesson"
                  value={form.lesson} onChange={handleChange}
                  className="w-full rounded-xl border-2 border-white/10 bg-navy px-4 py-2.5 text-cream focus:outline-none focus:border-amber-brand transition"
                >
                  <option value="">Select one (optional)</option>
                  {RESOURCES.map(r => (
                    <option key={r.id} value={r.title}>{r.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="fb-feedback" className="block text-sm font-bold text-cream/80 mb-1.5">Your feedback <span className="text-coral">*</span></label>
                <textarea
                  id="fb-feedback" name="feedback" rows={5} required
                  value={form.feedback} onChange={handleChange}
                  placeholder="What worked well? What did you notice? What would you change?"
                  className="w-full rounded-xl border-2 border-white/10 bg-white/5 px-4 py-2.5 text-cream placeholder:text-cream/25 resize-none focus:outline-none focus:border-amber-brand transition"
                />
              </div>

              <button
                type="submit"
                disabled={state === "loading"}
                className="w-full bg-amber-brand text-navy font-bold text-lg py-3.5 rounded-xl hover:opacity-90 transition disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {state === "loading" ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="40" strokeDashoffset="20" />
                    </svg>
                    Sending…
                  </>
                ) : "Send feedback"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default function ResourcesPage() {
  const [search, setSearch] = useState("");
  const [activeTypes, setActiveTypes] = useState<Set<ResourceType>>(new Set());
  const [activeSkills, setActiveSkills] = useState<Set<CoreSkill>>(new Set());
  const [activeAges, setActiveAges] = useState<Set<AgeGroup>>(new Set());

  const toggleType = (t: ResourceType) => setActiveTypes(prev => {
    const next = new Set(prev);
    next.has(t) ? next.delete(t) : next.add(t);
    return next;
  });
  const toggleSkill = (s: CoreSkill) => setActiveSkills(prev => {
    const next = new Set(prev);
    next.has(s) ? next.delete(s) : next.add(s);
    return next;
  });
  const toggleAge = (a: AgeGroup) => setActiveAges(prev => {
    const next = new Set(prev);
    next.has(a) ? next.delete(a) : next.add(a);
    return next;
  });

  const hasFilters = activeTypes.size > 0 || activeSkills.size > 0 || activeAges.size > 0 || search.trim();

  const filtered = useMemo(() => {
    return RESOURCES.filter(r => {
      if (activeTypes.size > 0 && !activeTypes.has(r.type)) return false;
      if (activeSkills.size > 0 && !r.skills.some(s => activeSkills.has(s))) return false;
      if (activeAges.size > 0 && !r.ageGroups.some(a => activeAges.has(a))) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        if (!r.title.toLowerCase().includes(q) && !r.blurb.toLowerCase().includes(q) && !(r.author?.toLowerCase().includes(q))) return false;
      }
      return true;
    });
  }, [search, activeTypes, activeSkills, activeAges]);

  const clearAll = () => {
    setSearch("");
    setActiveTypes(new Set());
    setActiveSkills(new Set());
    setActiveAges(new Set());
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="bg-navy pt-36 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block bg-white/10 text-cream/70 text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">
            Free to download
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-cream leading-tight mb-4">
            Resources
          </h1>
          <p className="text-cream/65 text-xl max-w-2xl leading-relaxed">
            Lesson plans, guides, and tools for early childhood educators. Everything here is designed for children aged 3–6 and built around the four skills democracy depends on.
          </p>
        </div>
      </div>

      {/* Filters + Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Search + filter bar */}
        <div className="space-y-5 mb-10">
          {/* Search */}
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="search"
              placeholder="Search by title or keyword…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-navy/15 bg-white text-navy placeholder:text-navy/35 focus:outline-none focus:border-blue-brand transition text-sm"
            />
          </div>

          {/* Filter rows */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-bold text-navy/50 uppercase tracking-wider w-20 shrink-0">Type</span>
              {ALL_TYPES.map(t => (
                <button
                  key={t}
                  onClick={() => toggleType(t)}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold border transition ${
                    activeTypes.has(t)
                      ? "bg-navy text-cream border-navy"
                      : "bg-white text-navy/70 border-navy/20 hover:border-navy/50"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-bold text-navy/50 uppercase tracking-wider w-20 shrink-0">Skill</span>
              {ALL_SKILLS.map(s => (
                <button
                  key={s}
                  onClick={() => toggleSkill(s)}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold border transition ${
                    activeSkills.has(s)
                      ? `${SKILL_COLORS[s]} border-current`
                      : "bg-white text-navy/70 border-navy/20 hover:border-navy/50"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-bold text-navy/50 uppercase tracking-wider w-20 shrink-0">Age</span>
              {ALL_AGE_GROUPS.map(a => (
                <button
                  key={a}
                  onClick={() => toggleAge(a)}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold border transition ${
                    activeAges.has(a)
                      ? "bg-blue-brand text-white border-blue-brand"
                      : "bg-white text-navy/70 border-navy/20 hover:border-navy/50"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Results count + clear */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-navy/50 font-semibold">
              {filtered.length} of {RESOURCES.length} resources
            </p>
            {hasFilters && (
              <button onClick={clearAll} className="text-sm text-blue-brand font-bold hover:underline">
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-navy/40">
            <p className="text-lg font-semibold">No resources match your filters.</p>
            <button onClick={clearAll} className="mt-3 text-blue-brand font-bold hover:underline text-sm">Clear filters</button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(r => (
              <div
                key={r.id}
                className="bg-white rounded-2xl border border-navy/8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  {/* Type badge + age */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ${TYPE_COLORS[r.type]}`}>
                      {r.type}
                    </span>
                    <span className="text-xs text-navy/45 font-semibold shrink-0">
                      {r.ageGroups.length === 1 ? r.ageGroups[0] : `${r.ageGroups[0].split("–")[0]}–${r.ageGroups[r.ageGroups.length - 1].split("–")[1]}`}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-navy leading-snug mb-1">{r.title}</h3>

                  {/* Author (books only) */}
                  {r.author && (
                    <p className="text-xs text-navy/50 font-semibold mb-3 italic">{r.author}</p>
                  )}

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {r.skills.map(s => (
                      <span key={s} className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${SKILL_COLORS[s]}`}>
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Blurb */}
                  <p className="text-sm text-navy/65 leading-relaxed flex-1">{r.blurb}</p>

                  {/* Download (lesson plans and resources only) */}
                  {r.file && (
                    <a
                      href={r.file}
                      download
                      className="mt-5 inline-flex items-center gap-2 text-blue-brand font-bold text-sm hover:gap-3 transition-all"
                    >
                      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v11" />
                      </svg>
                      Download {r.file.endsWith(".docx") ? "Word doc" : "PDF"}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <FeedbackForm />
    </div>
  );
}
