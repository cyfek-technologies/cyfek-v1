import { Code2, Smartphone, TrendingUp, Video, Cloud, Brain, Palette, Database, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const courses = [
  {
    icon: Code2,
    name: "Software Development",
    description: "Full-stack web development with modern frameworks like React, Next.js, Node.js, and databases.",
    duration: "6 months",
    projects: "5+ real projects",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Smartphone,
    name: "Mobile App Development",
    description: "Build native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
    duration: "6 months",
    projects: "3+ published apps",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: TrendingUp,
    name: "Digital Marketing",
    description: "Master SEO, social media marketing, paid advertising, email campaigns, and analytics.",
    duration: "4 months",
    projects: "Real campaign work",
    color: "from-orange-500 to-amber-400",
  },
  {
    icon: Video,
    name: "Content Creation",
    description: "Video editing, motion graphics, content strategy, and social media content production.",
    duration: "4 months",
    projects: "Portfolio ready",
    color: "from-red-500 to-rose-400",
  },
  {
    icon: Cloud,
    name: "Cloud Computing",
    description: "AWS, Azure, Google Cloud, DevOps practices, and infrastructure management.",
    duration: "5 months",
    projects: "Cloud certified",
    color: "from-sky-500 to-blue-400",
  },
  {
    icon: Brain,
    name: "AI & Machine Learning",
    description: "Python, machine learning fundamentals, neural networks, and AI application development.",
    duration: "6 months",
    projects: "AI projects",
    color: "from-emerald-500 to-teal",
  },
  {
    icon: Palette,
    name: "UI/UX Design",
    description: "User research, wireframing, prototyping, design systems, and tools like Figma.",
    duration: "4 months",
    projects: "Design portfolio",
    color: "from-violet-500 to-purple-400",
  },
  {
    icon: Database,
    name: "Data Analytics",
    description: "SQL, Python, data visualization, business intelligence, and analytics tools.",
    duration: "5 months",
    projects: "Data reports",
    color: "from-teal to-cyan-400",
  },
]

export function AcademyCourses() {
  return (
    <section className="py-20 lg:py-32 bg-soft-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">Available Courses</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Choose Your Tech Path
          </h2>
          <p className="text-muted-foreground text-lg">
            All courses are completely free. Pick the skill that excites you most and start building your future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.name}
              className="group bg-background rounded-2xl border border-border hover:border-teal/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${course.color}`} />
              <div className="p-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4`}
                >
                  <course.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-teal transition-colors">
                  {course.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{course.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="px-2 py-1 bg-muted rounded-full">{course.duration}</span>
                  <span className="px-2 py-1 bg-muted rounded-full">{course.projects}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-teal text-navy hover:bg-teal/90 font-semibold px-8 group">
            View Full Curriculum
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
