import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Peter",
  lastName: "Biodrowicz",
  name: `Peter Biodrowicz`,
  role: "Electrical Engineer",
  avatar: "/images/avatar.jpg",
  email: "biopeti1208@gmail.com",
  location: "Europe/Budapest", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Hungarian", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/b0redcactus",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/p%C3%A9ter-biodrowicz-99b900228//",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at{" "}
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: "biopet",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am an electrical engineer specializing in PV and BESS system design, leading design projects from concept to implementation.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Solservices",
        timeframe: "2024.04 - Present",
        role: "Project Engineer",
        achievements: [
          <>
            Leading design works internally
          </>,
          <>
            PV projects up to 50 MW
          </>,
          <>
            BESS projects up to 30 MVA / 50 MWh
          </>,
          <>
            Permit tracking
          </>,
          <>
            Expanding knowledge of 22 kV / 132 kV substations
          </>,
          <>
            Construction support
          </>,
          <>
            Communicating with technical inspectors and designers
          </>,
          <>
            Internal design tasks such as monitoring system design and cable trench cross-sections
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
         
        ],
      },


       {
        company: "Eslar",
        timeframe: "2023.10 - 2024.03",
        role: "Electrical Design Engineer",
        achievements: [
          <>
            Designing PV power plants up to 5 MW
          </>,
          <>
            DC, AC cabinet designs
          </>,
          <>
            Single line diagrams
          </>,
          <>
            Monitoring designs
          </>,
          <>
            Protection calculations
          </>,
          <>
            Cable trench cross sections
          </>,
          <>
            Layouts
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
         
        ],
      },

 {
        company: "Phlegon",
        timeframe: "2022.06 - 2023.10",
        role: "Electrical Design Engineer",
        achievements: [
          <>
            Designing PV power plants up to 2 MW
          </>,
          <>
            DC, AC cabinet designs
          </>,
          <>
            Single line diagrams
          </>,
          <>
            Layouts
          </>,
          <>
            Working in AutoCAD Electrica
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
         
        ],
      },


      
      
      {
        company: "Intern jobs",
        timeframe: "2021.10 - 2022.05",
        role: "Intern Electrical Engineer",
        achievements: [
          <>
            Writing my BSc thesis on the design of a 22 kV/0.4 kV distribution line
          </>,
          <>
            Learning about electrical building design
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Óbuda University",
        description: <>MSc Electrical Engineer</>,
      },
      {
        name: "University of Pécs",
        description: <>BSc Electrical Engineer</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "AutoCAD",
        description: (
          <>PV and BESS permit and implementation designs</>
        ),
        tags: [
         
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        
        ],
      },
      {
        title: "Permit and design management",
        description: (
          <>Review and follow the permitting and design process</>
        ),
        tags: [
          
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Construction support",
        description: (
          <>Supporting construction team</>
        ),
        tags: [
          
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
