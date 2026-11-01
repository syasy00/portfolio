
import React from 'react';
import {
  BriefcaseBusiness,
  GraduationCap,
  Calendar,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

const Education: React.FC = () => {
  const contributions = [
    {
      title: 'IPQC Web System Development',
      description:
        'Designed and developed a web-based system for managing in-process quality findings, status tracking, ICAR follow-up, dashboards, role-based access, and audit history.'
    },
    {
      title: 'Quality Process Automation',
      description:
        'Developed an Excel VBA solution to resolve employee ID sequencing issues in QA reporting. The solution was adopted by the team.'
    },
    {
      title: 'Data Visualization & Reporting',
      description:
        'Supported quality reporting activities and collaborated with the Philippines IT team on a Production OQA dashboard using Power BI.'
    },
    {
      title: 'System Testing & Documentation',
      description:
        'Performed functional testing, refined system features based on feedback, and prepared technical documentation and user guidance.'
    }
  ];

  return (
    <section
      id="experience"
      className="py-24 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs uppercase tracking-widest">
            My Professional Journey
          </span>

          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white mt-4">
            Experience <span className="italic text-indigo-600 dark:text-indigo-400">& Education</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 mt-5 max-w-2xl mx-auto">
            From academic projects to practical industry experience,
            applying technology to solve real-world challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* INTERNSHIP EXPERIENCE */}
          <div className="lg:col-span-2 p-8 md:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xl">

            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green-600 dark:text-green-400">
                <CheckCircle2 className="w-4 h-4" />
                Internship Completed
              </span>

              <span className="flex items-center gap-2 text-sm font-mono text-slate-500 dark:text-slate-400">
                <Calendar className="w-4 h-4" />
                Apr - Oct 2026
              </span>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-indigo-100 dark:bg-indigo-500/10">
                <BriefcaseBusiness className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white">
                  Quality Department Intern
                </h3>

                <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-2">
                  Advanced Energy Industries (Malaysia) Sdn. Bhd.
                </p>

                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  Industrial Training
                </p>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Completed an industrial internship in the Quality Department,
              gaining hands-on experience in system development,
              quality assurance workflows, automation, and reporting.
              Contributed to digital solutions aimed at improving
              the organization and accessibility of quality information.
            </p>

            <div className="space-y-6">
              {contributions.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <span className="w-2 h-2 mt-2 rounded-full bg-indigo-500 shrink-0" />

                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h4>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 mt-10 font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all"
            >
              Explore My Projects
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* EDUCATION */}
          <div className="space-y-6">

            <div className="p-8 rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10">
              <GraduationCap className="w-9 h-9 text-indigo-600 dark:text-indigo-400 mb-6" />

              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                2022 - 2026
              </span>

              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mt-3 mb-3">
                Bachelor of Computer Science
              </h3>

              <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                Universiti Utara Malaysia
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-400 mt-5 leading-relaxed">
                Major in Human-Centered Computing, focusing on
                software development, usability, user experience,
                and human-centered system design.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
              <p className="text-xs font-mono uppercase tracking-widest text-indigo-200 mb-4">
                Areas of Interest
              </p>

              <h3 className="font-serif italic text-2xl font-bold mb-5">
                Building solutions that make a difference.
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  'Web Development',
                  'UI/UX',
                  'Data Analytics',
                  'Automation',
                  'Software Engineering'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-2 rounded-full bg-white/10 border border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
