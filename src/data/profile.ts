import profileImg from "@/assets/profile.png";
import XIcon from "@/components/XIcon";
import LinkedInIcon from "@/components/LinkedInIcon";
import GitHubIcon from "@/components/GitHubIcon"
import { technologies, type Tech } from "./constant";


export type Experience = {
    role: string,
    type: "Full Time" | "Part Time",
    company: string,
    period: string
}

export type Project = {
    name: string,
    company: string,
    domain: 'Finance' | "HR" | "Education" | "Healthcare",
    techStack: Tech[],
    keyFeatures: string[]
}

export type Education = {
    course: string,
    university: string,
    duration: string
}

const experiences:Experience[]=[
    {role:"Software Engineer", type:"Full Time", company:"Emirates National Bank Dubai (GSS)", period:"Feb 2025 – May 2025"},
    {role:"Senior Software Engineer", type:"Full Time", company:"Zalaris HR Services Pvt Ltd", period:"Dec 2022 – Jan 2025"},
    {role:"Software Engineer", type:"Full Time", company:"GradGuide (The Scalers)", period:"Oct 2021 – Sep 2022"},
    {role:"Full Stack Developer", type:"Full Time", company:"Durvah IT Consulting Pvt Ltd", period:"Sep 2019 – Oct 2021"},
    {role:"Software Engineer", type:"Full Time", company:"Uttara Info Solutions Pvt Ltd", period:"Apr 2018 – Aug 2019"}
]

const projects:Project[]=[
    {
        name:'Helpdesk - Ticketing Service', company:'Zalaris HR Services Pvt Ltd', domain:'HR',
        techStack:[technologies.Java, technologies["Spring Boot"], technologies.React, technologies["Node.js"],
        technologies.MongoDB, technologies.PostgreSQL,technologies.Elasticsearch, technologies.RabbitMQ ,technologies.Docker, technologies.Kubernetes,
         technologies.Azure],
        keyFeatures:[
            'Designed microservices for Notifications, Feedback, CMS, Sync, and File Storage (Azure Blob).',
            'Implemented <strong>ElasticSearch + Azure Index</strong> for fast searching.',
            'Extendable to any ticketing software with <strong>Port-Adapter</strong> design pattern',
            'Implemented pdf scanner to clean malicious data'
        ]
    },
    {
        name:'GradGuide – Jobs & Mentorship Platform',company:'The Scalers(GradGuide)', domain:'Education',
        techStack:[technologies["Node.js"], technologies.React,technologies.GraphQL, technologies.PostgreSQL, technologies.Prisma,technologies.AWS, technologies.Docker, technologies.Kubernetes, technologies.Redis ],
        keyFeatures:[
            'Integrated APIs (SendBird, SendGrid, Intercom, Vimeo, Calendly)',
            'Built features for Video Mentorship, Job Portal, and Career Fairs.',
            'Implemented Redis cache, improving response times by 30%.',
            'Migrated MVP from Firebase to AWS, enhancing scalability.'

        ]
    },
    {
        name:'Imprezz – Invoicing & POS App', company:'Durvah IT Consulting',domain:'Finance',
        techStack:[
            technologies.Java, technologies["Spring Boot"],technologies["Node.js"], 
            technologies.React,technologies.PostgreSQL, technologies.Elasticsearch, technologies.Redis,
            technologies.Docker, technologies.Kubernetes
        ], 
        keyFeatures:[
            'Implemented <strong>multi-tenant architecture</strong> and <strong>subscription-based</strong> features.',
            'Integrated payment and subscription services (Razorpay, Chargebee).',
            'Reduced invoice generation time by 40% with optimized services.'
        ]
    }
]


const qualifications: Education[]=[
    {course:"Bachelor of Computer Applications", university:"Annamalai University", duration:"Aug 2019 - Aug 2022"},
    {course:"11th & 12th", university:"T.S Residential Jr College", duration:"June 2013 - June 2015"},
    {course:"10th", university:"A.P Residential School", duration:"June 2012 - June 2013"}

]




export const profie ={
    img: profileImg,
    name: 'Ravinder Reddy Kothabad',
    subTitle: 'Full Stack Developer',
    tags: ['Java SpringBoot', 'NodeJs', 'ReactJs', 'Javascript', 'Typescript'],
    cvLink:'https://docs.google.com/document/d/1YtoJKbxQIv7FKkhWBOaMhHSPOOt5tT2T',
    location:'Bangalore, India',
    gitHubId:'devravinder',

    social:[
        {Icon: GitHubIcon, url:'https://github.com/devravinder' },
        {Icon: LinkedInIcon, url:'https://www.linkedin.com/in/ravinder-reddy-kothabad-333719192' },
        {Icon: XIcon, url:'https://www.linkedin.com/in/ravinder-reddy-kothabad-333719192' }
    ]
    ,
    about:[
        `Senior Full Stack Developer with 7+ years of experience in designing and developing scalable web applications using <strong>Java-Spring Boot, React, and Node.js.</strong>`,
        `Strong expertise in building <strong>RESTful</strong> and <strong>GraphQL APIs</strong>, <strong>cloud-native applications, Micro Services, and event-driven systems</strong>. Proficient in system design, CI/CD pipelines, and cloud services (AWS, Azure, GCP).
         Adept at problem-solving, architecture design, and team collaboration, with experience across <strong>Finance, HR, Education, and Healthcare</strong> domains.`

    ],

    skills:[
        technologies.Java,
        technologies["Spring Boot"],
        technologies["Node.js"],
        technologies.React,
        technologies["Next.js"],
        technologies["Electron.js"],

        technologies.REST,
        technologies.gRPC,
        technologies.GraphQL,

        technologies.PostgreSQL,
        technologies.MongoDB,
        technologies.Elasticsearch,
        technologies.Redis,
        technologies["Apache Kafka"],
        technologies.RabbitMQ,

        technologies.JavaScript,
        technologies.TypeScript,
        technologies.HTML5,
        technologies.CSS3,
        technologies["Tailwind CSS"],

        technologies.Redux,
        technologies.Express,
        technologies.Prisma,
        technologies.Sequelize,


        technologies.JUnit5,
        technologies.AssertJ,
        technologies.Mockito,
        technologies.Jest,
        technologies.Cypress,
        technologies.Gatling,
        technologies.K6,

        technologies.Prometheus,
        technologies.Grafana,
        technologies.Loki,
        technologies.Tempo,
        technologies.Kibana,


        technologies.Git,
        technologies.Docker,
        technologies.Kubernetes,
        technologies.Terraform,
        technologies["GitHub Pipelines"],

        technologies.AWS,
        technologies.Azure,
        technologies.Linux
    

    ],
    experiences,
    projects,
    skillsGroupBy:{
        "Backend Technologies":[
            technologies.Java,
            technologies["Spring Boot"],
            technologies["Node.js"],
            technologies.Express,
            technologies.REST, technologies.GraphQL, technologies.gRPC
        ],
        "Frontened Technologies":[
            technologies.React, technologies.JavaScript, technologies.TypeScript, technologies["Next.js"],
            technologies.HTML5, technologies.CSS3, technologies["Tailwind CSS"]
        ],
        "DevOps":[
            technologies.Docker, technologies.Kubernetes, technologies.Terraform,
            technologies.Git, technologies["GitHub Pipelines"], technologies.Linux
        ],
        "Testing":[
            technologies.JUnit5, technologies.AssertJ, technologies.Mockito, technologies.Cypress, technologies.Jest,
            technologies.K6, technologies.Gatling
        ],
        "DBs & Others":[
            technologies.PostgreSQL, technologies.MongoDB, technologies.Elasticsearch, technologies.Redis,
            technologies.Prometheus, technologies.Grafana, technologies.Loki, technologies.Tempo, technologies.Kibana
        ]

    },
    qualifications
}



export default profie;