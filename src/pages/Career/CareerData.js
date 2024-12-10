const techData = [
    {
        "id": 1,
        "title": "Frontend Developer",
        "location": "Remote",
        "description1": "Develop and maintain user-facing features for web applications.",
        "description2": "Collaborate with designers and backend developers to enhance user experience.",
        "jobDescription" : "We are seeking a motivated Frontend Developer with at least 6 months of experience to join our team. The ideal candidate will have a basic understanding of HTML, CSS, JavaScript, and familiarity with modern frontend frameworks like React",
        "requirements": [
          "At least 6 months of experience as a Frontend Developer.",
          "Basic proficiency in HTML, CSS, and JavaScript.",
          "Familiarity with modern frontend frameworks like React.",
          "Understanding of version control systems such as Git.",
          "Willingness to learn and adapt to new technologies."
        ],
        "additionalSkills": [
          "Experience with TypeScript is a plus.",
          "Knowledge of state management libraries like Redux or Context API.",
          "Understanding of modern build tools such as Webpack or Vite.",
          "Experience with testing frameworks like Jest or Cypress."
        ],
        "employmentType": "Full-time",
        // "location": "Remote or On-site"
      },
      {
        "id": 2,
        "title": "Backend Developer",
        "location": "Remote",
        "description1": "Design and implement server-side logic and database structures.",
        "description2": "Ensure data security and integrity through efficient APIs and microservices.",
        "jobDescription": "We are seeking a motivated Backend Developer with at least 6 months of experience to join our team. The ideal candidate will have a basic understanding of server-side technologies, databases, and APIs, and is eager to learn and grow in backend development.",
        "requirements": [
          "At least 6 months of experience as a Backend Developer.",
          "Basic proficiency in server-side languages such as Node.js, Python, or Java.",
          "Understanding of RESTful APIs and database management.",
          "Familiarity with version control systems such as Git.",
          "Willingness to learn and adapt to new backend technologies."
        ],
        "additionalSkills": [
          "Experience with databases like MongoDB, MySQL, or PostgreSQL.",
          "Knowledge of cloud platforms like AWS or Azure.",
          "Understanding of API testing frameworks like Postman or Swagger.",
          "Experience with containerization tools like Docker is a plus."
        ],
        "employmentType": "Full-time",
        // "location": "Remote or On-site"
      
      },
      {
        "id": 3,
        "title": "Blockchain Developer (Web3)",
        "location": "Remote",
        "description1": "Build and integrate smart contracts with decentralized applications.",
        "description2": "Collaborate on Web3 solutions, ensuring scalability and security.",
        "jobDescription": "We are seeking a motivated Blockchain Developer with at least 6 months of experience to join our team. The ideal candidate will have a basic understanding of blockchain technology, smart contracts, and decentralized applications (DApps), and is eager to grow and learn in the field of blockchain development.",
        "requirements": [
          "At least 6 months of experience in Blockchain development.",
          "Basic understanding of blockchain concepts such as decentralization, consensus algorithms, and distributed ledgers.",
          "Familiarity with popular blockchain platforms like Ethereum, Bitcoin, or other similar networks.",
          "Basic knowledge of smart contract development and blockchain scripting languages like Solidity.",
          "Willingness to learn and adapt to new blockchain technologies and frameworks."
        ],
        "additionalSkills": [
          "Familiarity with version control systems such as Git.",
          "Experience with decentralized application (DApp) development is a plus.",
          "Understanding of blockchain security best practices.",
          "Basic experience with tools like Truffle, Hardhat, or Ganache.",
          "Familiarity with token standards like ERC-20 or ERC-721."
        ],
        "employmentType": "Full-time",
      },
      {
        "id": 4,
        "title": "Web Designer",
        "location": "Remote",
        "description1": "Design and optimize website layouts and interactive elements.",
        "description2": "Work with developers to implement responsive and visually appealing designs.",
        "jobDescription": "We are seeking a motivated DevOps Engineer with at least 6 months of experience to join our team. The ideal candidate will have a basic understanding of software development, system administration, and automation tools, and is eager to grow in the field of DevOps and continuous integration/continuous deployment (CI/CD).",
        "requirements": [
          "At least 6 months of experience in DevOps or related fields.",
          "Basic understanding of version control systems like Git.",
          "Familiarity with cloud platforms such as AWS, Azure, or Google Cloud.",
          "Experience with automation tools like Jenkins, Ansible, or Terraform.",
          "Willingness to learn and adapt to new DevOps tools and practices."
        ],
        "additionalSkills": [
          "Basic experience with containerization tools like Docker.",
          "Familiarity with orchestration tools such as Kubernetes.",
          "Understanding of continuous integration and deployment pipelines.",
          "Knowledge of scripting languages like Bash or Python is a plus.",
          "Experience with infrastructure as code (IaC) is a plus."
        ],
        "employmentType": "Full-time",
      
      },
      {
        "id": 5,
        "title": "Graphics Designer",
        "location": "Remote",
        "description1": "Create visual content for digital platforms, including social media and websites.",
        "description2": "Collaborate on brand identity and design consistency across projects.",
        "jobDescription": "We are looking for a creative and motivated Graphic Designer with at least 6 months of experience to join our team. The ideal candidate will have a basic understanding of design principles, proficiency in graphic design tools, and a passion for creating visually compelling designs.",
        "requirements": [
          "At least 6 months of experience as a Graphic Designer.",
          "Basic proficiency in design software such as Adobe Photoshop, Illustrator, or other design tools.",
          "Understanding of design principles including color theory, typography, and layout.",
          "Ability to create designs for both print and digital platforms.",
          "Willingness to learn and adapt to new design trends and tools."
        ],
        "additionalSkills": [
          "Experience with motion graphics or video editing is a plus.",
          "Knowledge of web design and UI/UX principles.",
          "Familiarity with design systems and responsive design.",
          "Experience with Adobe After Effects or similar software is a plus."
        ],
        "employmentType": "Full-time",
      },
      {
        "id": 6,
        "title": "DevOps Engineer",
        "location": "Remote",
        "description1": "Implement CI/CD pipelines to streamline code deployment.",
        "description2": "Monitor and manage cloud infrastructure to ensure stability and security.",
        "jobDescription": "We are seeking a motivated DevOps Engineer with at least 6 months of experience to join our team. The ideal candidate will have a basic understanding of software development, system administration, and automation tools, and is eager to grow in the field of DevOps and continuous integration/continuous deployment (CI/CD).",
        "requirements": [
          "At least 6 months of experience in DevOps or related fields.",
          "Basic understanding of version control systems like Git.",
          "Familiarity with cloud platforms such as AWS, Azure, or Google Cloud.",
          "Experience with automation tools like Jenkins, Ansible, or Terraform.",
          "Willingness to learn and adapt to new DevOps tools and practices."
        ],
        "additionalSkills": [
          "Basic experience with containerization tools like Docker.",
          "Familiarity with orchestration tools such as Kubernetes.",
          "Understanding of continuous integration and deployment pipelines.",
          "Knowledge of scripting languages like Bash or Python is a plus.",
          "Experience with infrastructure as code (IaC) is a plus."
        ],
        "employmentType": "Full-time",
      
      }
]

const dmData = [
    {
        "id": 7,
        "title": "Digital Marketing Intern",
        "location": "Remote",
        "description1": "Assist in planning and executing digital marketing campaigns.",
        "description2": "Analyze performance metrics and optimize campaign effectiveness.",
        "jobDescription": "We are looking for a Digital Marketing Intern with at least 6 months of experience to join our marketing team. The ideal candidate will have a basic understanding of digital marketing strategies, including SEO, SEM, and social media, and is eager to learn and grow in the field of digital marketing.",
        "requirements": [
          "At least 6 months of experience in digital marketing or related fields.",
          "Basic knowledge of SEO, SEM, email marketing, and content marketing.",
          "Familiarity with digital marketing tools such as Google Analytics, Google Ads, or Facebook Ads Manager.",
          "Willingness to learn and stay updated with digital marketing trends.",
          "Basic understanding of social media platforms and how they can be used for marketing."
        ],
        "additionalSkills": [
          "Experience with content creation for blogs or social media.",
          "Familiarity with email marketing tools like MailChimp or ConvertKit.",
          "Understanding of basic analytics and reporting.",
          "Basic experience with keyword research and competitive analysis."
        ],
        "employmentType": "Full-time/Part-time",
      
      },
      {
        "id": 8,
        "title": "Social Media Intern",
        "location": "Remote",
        "description1": "Manage and create content for social media channels.",
        "description2": "Engage with the audience and track social media metrics.",
        "jobDescription": "We are looking for a creative Social Media Intern with at least 6 months of experience to help manage and grow our social media presence. The ideal candidate will have a basic understanding of social media platforms, content creation, and engagement strategies.",
        "requirements": [
          "At least 6 months of experience in social media marketing or related fields.",
          "Familiarity with popular social media platforms such as Facebook, Instagram, Twitter, and LinkedIn.",
          "Basic knowledge of content creation, scheduling, and engagement.",
          "Ability to monitor and report on social media metrics.",
          "Willingness to learn and implement social media best practices."
        ],
        "additionalSkills": [
          "Experience with social media management tools like Hootsuite or Buffer.",
          "Basic knowledge of social media advertising.",
          "Creative mindset with a focus on design and visual content.",
          "Experience with influencer marketing is a plus."
        ],
        "employmentType": "Full-time/Part-time",
      
      },
      {
        "id": 9,
        "title": "SEO Intern",
        "location": "Remote",
        "description1": "Perform keyword research and optimize web content for search engines.",
        "description2": "Support on-page and off-page SEO initiatives.",
        "jobDescription": "We are seeking an SEO Intern with at least 6 months of experience to assist in optimizing websites for search engines. The ideal candidate will have a basic understanding of SEO best practices, keyword research, and on-page/off-page optimization techniques.",
        "requirements": [
          "At least 6 months of experience in SEO or related fields.",
          "Basic understanding of SEO tools such as Google Search Console, SEMrush, or Ahrefs.",
          "Knowledge of keyword research, on-page SEO, and link-building strategies.",
          "Willingness to learn and improve SEO skills.",
          "Ability to work with content teams to ensure SEO optimization."
        ],
        "additionalSkills": [
          "Experience with Google Analytics and SEO reporting tools.",
          "Understanding of website structure and optimization techniques.",
          "Basic knowledge of HTML and website analytics.",
          "Experience with local SEO is a plus."
        ],
        "employmentType": "Full-time/Part-time",
      
      },
      {
        "id": 10,
        "title": "Content Marketing Intern",
        "location": "Remote",
        "description1": "Assist in creating blog posts, articles, and other digital content.",
        "description2": "Research trending topics to support content development.",
        "jobDescription": "We are looking for a Content Marketing Intern with at least 6 months of experience to assist with content creation, blogging, and content promotion strategies. The ideal candidate will have a basic understanding of content marketing, SEO, and writing for various digital platforms.",
        "requirements": [
          "At least 6 months of experience in content marketing or related fields.",
          "Strong writing and editing skills.",
          "Basic knowledge of SEO and keyword research.",
          "Ability to create engaging content for blogs, websites, and social media.",
          "Willingness to learn and adapt to the content marketing strategies of the company."
        ],
        "additionalSkills": [
          "Experience with blogging platforms like WordPress.",
          "Familiarity with content distribution and promotion channels.",
          "Understanding of audience targeting and content strategy.",
          "Experience with email newsletters and content marketing automation tools is a plus."
        ],
        "employmentType": "Full-time/Part-time",
      
      },
      {
        "id": 11,
        "title": "Email Marketing Intern",
        "location": "Remote",
        "description1": "Help in drafting and scheduling email marketing campaigns.",
        "description2": "Monitor and analyze email performance metrics.",
        "jobDescription": "We are seeking an Email Marketing Intern with at least 6 months of experience to assist with creating, managing, and optimizing email campaigns. The ideal candidate will have a basic understanding of email marketing platforms, list segmentation, and campaign analytics.",
        "requirements": [
          "At least 6 months of experience in email marketing or related fields.",
          "Familiarity with email marketing platforms such as MailChimp, Constant Contact, or SendGrid.",
          "Basic knowledge of email campaign creation, list segmentation, and automation.",
          "Understanding of A/B testing and email performance analytics.",
          "Willingness to learn and improve email marketing skills."
        ],
        "additionalSkills": [
          "Experience with HTML email design is a plus.",
          "Knowledge of email deliverability best practices.",
          "Experience with email personalization and segmentation strategies.",
          "Basic understanding of conversion rate optimization (CRO)."
        ],
        "employmentType": "Full-time/Part-time",
      
      }
]


const opsData = [
    {
        "id": 12,
        "title": "Sales Intern",
        "location": "Remote",
        "description1": "Assist with lead generation and client outreach efforts.",
        "description2": "Support the sales team in tracking and managing customer interactions.",
        "jobDescription": "We are looking for a Sales Intern with at least 6 months of experience or relevant coursework to join our sales team. The ideal candidate will assist in lead generation, client communication, and sales strategies to achieve business goals.",
        "requirements": [
          "At least 6 months of experience or coursework in sales or related fields.",
          "Strong communication and interpersonal skills.",
          "Basic knowledge of CRM tools and sales strategies.",
          "Ability to build and maintain relationships with clients.",
          "Willingness to learn and adapt to the sales process."
        ],
        "additionalSkills": [
          "Experience with cold calling or email outreach.",
          "Knowledge of market research techniques.",
          "Basic understanding of negotiation and closing techniques.",
          "Proficiency in Microsoft Office or Google Workspace."
        ],
        "employmentType": "Full-time/Part-time",
      
      },
      {
        "id": 13,
        "title": "Business Development Intern",
        "location": "Remote",
        "description1": "Research potential clients and prepare proposals for new business opportunities.",
        "description2": "Participate in client meetings and assist in proposal follow-ups.",
        "jobDescription": "We are seeking a Business Intern with at least 6 months of experience or coursework in business studies to support our operational and strategic projects. The ideal candidate will assist in analyzing data, preparing reports, and contributing to business growth initiatives.",
  "requirements": [
    "At least 6 months of experience or coursework in business or related fields.",
    "Strong analytical and problem-solving skills.",
    "Basic knowledge of business operations and strategy.",
    "Ability to work with cross-functional teams.",
    "Willingness to learn and adapt to a dynamic business environment."
  ],
  "additionalSkills": [
    "Familiarity with business tools like Excel, PowerPoint, or Google Workspace.",
    "Experience with market research or competitor analysis.",
    "Knowledge of financial and performance metrics.",
    "Strong organizational and project management skills."
  ],
  "employmentType": "Full-time/Part-time",

      },
      // {
      //   "id": 14,
      //   "title": "Account Management Intern",
      //   "location": "Remote",
      //   "description1": "Support account managers in maintaining client relationships.",
      //   "description2": "Assist in handling customer inquiries and ensure client satisfaction."
      // },
      {
        "id": 15,
        "title": "Market Research Intern",
        "location": "Remote",
        "description1": "Conduct research on target markets and competitor analysis.",
        "description2": "Analyze sales data to identify trends and growth opportunities.",
        "jobDescription": "We are looking for a Marketing Research Intern with at least 6 months of experience or coursework in marketing to assist in gathering and analyzing market data. The ideal candidate will contribute to insights that drive marketing strategies and campaigns.",
        "requirements": [
          "At least 6 months of experience or coursework in marketing or related fields.",
          "Strong research and data analysis skills.",
          "Basic knowledge of marketing concepts and tools.",
          "Ability to present findings in clear and concise reports.",
          "Willingness to learn and adapt to marketing research methodologies."
        ],
        "additionalSkills": [
          "Experience with survey tools or data collection techniques.",
          "Familiarity with marketing analytics tools like Google Analytics.",
          "Knowledge of competitive analysis and customer insights.",
          "Proficiency in Excel or data visualization tools like Tableau."
        ],
        "employmentType": "Full-time/Part-time",
      
      },
      {
        "id": 16,
        "title": "Sales Operations Intern",
        "location": "Remote",
        "description1": "Help streamline sales processes and improve operational efficiency.",
        "description2": "Assist in maintaining CRM data and producing sales performance reports.",
        "jobDescription": "We are seeking a Sales Operations Intern with at least 6 months of experience or coursework in sales or business to assist in streamlining sales processes and improving efficiency. The ideal candidate will support reporting, CRM management, and operational tasks.",
        "requirements": [
          "At least 6 months of experience or coursework in sales operations or related fields.",
          "Strong analytical and organizational skills.",
          "Basic knowledge of CRM systems and sales processes.",
          "Ability to analyze sales performance metrics and prepare reports.",
          "Willingness to learn and adapt to sales operations tools and strategies."
        ],
        "additionalSkills": [
          "Experience with Salesforce or other CRM platforms.",
          "Knowledge of sales forecasting techniques.",
          "Familiarity with pipeline management and lead tracking.",
        ],
        "employmentType": "Full-time/Part-time",
      }
]


const contentData = [
    {
        "id": 17,
        "title": "Content Writer Intern",
        "location": "Remote",
        "description1": "Assist in writing, editing, and publishing blog posts, articles, and web content.",
        "description2": "Research industry topics and collaborate with the team to create engaging content.",
        "jobDescription": "We are looking for a passionate Content Writer Intern with at least 6 months of experience to join our content team. The ideal candidate will have strong writing skills, basic knowledge of SEO, and a keen interest in crafting engaging and informative content for digital platforms.",
        "requirements": [
          "At least 6 months of experience in content writing or related fields.",
          "Strong writing, editing, and proofreading skills.",
          "Basic knowledge of SEO and keyword research.",
          "Ability to write clear, concise, and engaging content for blogs, articles, and social media.",
          "Willingness to learn and adapt to different writing styles and tones."
        ],
        "additionalSkills": [
          "Experience with WordPress or other content management systems.",
          "Familiarity with basic content marketing strategies.",
          "Knowledge of social media content trends.",
          "Creative thinking and storytelling skills."
        ],
        "employmentType": "Full-time/Part-time",


      },
      {
        "id": 18,
        "title": "SEO Content Writer",
        "location": "Remote",
        "description1": "Create SEO-optimized content that ranks well on search engines.",
        "description2": "Collaborate with the SEO team to improve content performance through keyword research.",
        "jobDescription": "We are seeking an SEO Content Writer with at least 6 months of experience to create optimized content for web pages, blogs, and marketing campaigns. The ideal candidate will have a strong understanding of SEO best practices and the ability to write high-quality, keyword-rich content.",
        "requirements": [
          "At least 6 months of experience in content writing with a focus on SEO.",
          "Strong understanding of on-page and off-page SEO techniques.",
          "Experience in keyword research and implementation.",
          "Ability to write content that drives organic traffic and improves search engine rankings.",
          "Basic understanding of Google Analytics and SEO tools like SEMrush or Ahrefs."
        ],
        "additionalSkills": [
          "Knowledge of link-building strategies.",
          "Familiarity with meta tags, alt text, and schema markup.",
          "Experience with content audits and optimization.",
          "Ability to analyze and report SEO performance metrics."
        ],
        "employmentType": "Full-time/Part-time",
      
      },
      {
        "id": 19,
        "title": "Technical Content Writer",
        "location": "Remote",
        "description1": "Write clear and concise technical documentation, manuals, and guides.",
        "description2": "Translate complex technical concepts into easy-to-understand content for non-technical audiences.",
        "jobDescription": "We are seeking a Technical Content Writer with at least 6 months of experience to produce high-quality content that simplifies complex technical concepts. The ideal candidate will have strong technical knowledge and writing skills.",
        "requirements": [
          "At least 6 months of experience in technical content writing or related fields.",
          "Ability to write clear and concise technical documents, user guides, and tutorials.",
          "Basic knowledge of technical subjects such as software, IT, or engineering.",
          "Experience in working with developers or technical teams.",
          "Willingness to learn and adapt to new technical topics and tools."
        ],
        "additionalSkills": [
          "Familiarity with Markdown or similar technical writing tools.",
          "Experience with API documentation.",
          "Basic knowledge of coding languages is a plus.",
          "Understanding of content structure and formatting for technical audiences."
        ],
        "employmentType": "Full-time/Part-time",
      
      },
      {
        "id": 20,
        "title": "Creative Content Writer",
        "location": "Remote",
        "description1": "Develop creative content such as storytelling pieces, case studies, and interactive web content.",
        "description2": "Brainstorm innovative ideas to create compelling narratives that engage the audience.",
        "jobDescription": "We are looking for a Creative Content Writer with at least 6 months of experience to develop compelling and imaginative content for various platforms. The ideal candidate will have a flair for storytelling and a strong understanding of audience engagement.",
        "requirements": [
          "At least 6 months of experience in creative writing or content creation.",
          "Strong storytelling and idea-generation skills.",
          "Ability to create engaging content for blogs, campaigns, and social media.",
          "Basic understanding of content marketing strategies.",
          "Willingness to learn and adapt to various creative styles and tones."
        ],
        "additionalSkills": [
          "Experience with creative campaign planning.",
          "Knowledge of social media trends and audience engagement.",
          "Familiarity with visual content creation tools like Canva is a plus.",
          "Creative thinking and brainstorming abilities."
        ],
        "employmentType": "Full-time/Part-time",
      
      },
      {
        "id": 21,
        "title": "Content Strategist",
        "location": "Remote",
        "description1": "Develop and implement content strategies to enhance brand presence online.",
        "description2": "Work closely with marketing teams to align content with overall business objectives.",
        "jobDescription": "We are seeking a Content Strategist with at least 6 months of experience to assist in planning, creating, and managing content strategies. The ideal candidate will have strong analytical and creative skills and a deep understanding of content marketing.",
        "requirements": [
          "At least 6 months of experience in content marketing or strategy.",
          "Ability to analyze content performance and create data-driven strategies.",
          "Strong understanding of audience targeting and user personas.",
          "Experience in planning content calendars and campaigns.",
          "Willingness to learn and stay updated with content marketing trends."
        ],
        "additionalSkills": [
          "Knowledge of SEO and analytics tools like Google Analytics.",
          "Experience with content audits and performance analysis.",
          "Strong project management and organizational skills.",
          "Understanding of multi-channel content distribution."
        ],
        "employmentType": "Full-time/Part-time",
      
      },
      {
        "id": 22,
        "title": "Copywriter",
        "location": "Remote",
        "description1": "Write persuasive and creative copy for advertisements, social media, and websites.",
        "description2": "Collaborate with marketing teams to ensure the copy aligns with brand voice and messaging.",
        "jobDescription": "We are looking for a Copywriter with at least 6 months of experience to craft persuasive and engaging copy for marketing materials, advertisements, and digital campaigns. The ideal candidate will have strong writing skills and an understanding of branding and marketing principles.",
  "requirements": [
    "At least 6 months of experience in copywriting or related fields.",
    "Ability to write compelling copy for ads, social media, and websites.",
    "Strong understanding of brand voice and tone.",
    "Basic knowledge of marketing strategies and audience targeting.",
    "Willingness to learn and adapt to different copy styles."
  ],
  "additionalSkills": [
    "Experience with email marketing copy.",
    "Familiarity with A/B testing for copy performance.",
    "Knowledge of digital advertising trends.",
    "Creative thinking and ideation skills."
  ],
  "employmentType": "Full-time/Part-time",

      }
]


const anchorData = [
  {
    "id": 23,
    "title": "Tech Event Anchor",
    "location": "Remote",
    "description1": "Host and moderate technology-related events, including webinars, conferences, and panel discussions.",
    "description2": "Engage with speakers and audiences to ensure smooth event flow and valuable interactions.",
    "jobDescription": "We are looking for a charismatic Tech Event Anchor with at least 6 months of experience in public speaking or hosting. The ideal candidate will have a passion for technology and the ability to communicate complex topics in an engaging manner.",
    "requirements": [
      "At least 6 months of experience as a host, moderator, or public speaker.",
      "Strong understanding of technology trends and industry developments.",
      "Excellent verbal communication and presentation skills.",
      "Ability to manage live Q&A sessions and audience interactions.",
      "Willingness to travel for on-site events if needed."
    ],
    "additionalSkills": [
      "Experience with live-streaming platforms and tools.",
      "Familiarity with tech domains such as AI, Web Development, or Cybersecurity.",
      "Experience in podcast hosting or tech-related content creation.",
      "Knowledge of event management tools like Hopin, Zoom, or Microsoft Teams."
    ],
    "employmentType": "Freelance or Part-time"
  },
  {
    "id": 24,
    "title": "Webinar Host",
    "location": "Remote",
    "description1": "Host live webinars on technology topics, ensuring seamless delivery and engagement.",
    "description2": "Coordinate with speakers and technical teams for smooth webinar execution.",
    "jobDescription": "We are seeking a dynamic Webinar Host with a passion for technology and public engagement. The ideal candidate should have experience in hosting virtual events and connecting with online audiences.",
    "requirements": [
      "Experience hosting or moderating virtual webinars or events.",
      "Strong communication and time management skills.",
      "Basic understanding of webinar software such as Zoom, Google Meet, or Webex.",
      "Ability to multitask and handle live technical issues."
    ],
    "additionalSkills": [
      "Knowledge of trending topics in technology, including Web3, DevOps, and Cloud Computing.",
      "Experience with social media promotion for webinars.",
      "Basic video editing for webinar recordings.",
      "Familiarity with audience engagement tools like polls or chat moderators."
    ],
    "employmentType": "Part-time"
  },
  {
    "id": 25,
    "title": "Tech Conference Moderator",
    "location": "Remote",
    "description1": "Facilitate panel discussions and keynote sessions at tech conferences.",
    "description2": "Engage with industry leaders and ensure smooth transitions between sessions.",
    "jobDescription": "We are hiring a Tech Conference Moderator to lead discussions and host sessions during tech-focused events. The role demands excellent communication skills and a deep understanding of industry trends.",
    "requirements": [
      "6 months of experience in moderating live events or panels.",
      "Strong understanding of technical topics like software development, AI, or cybersecurity.",
      "Ability to handle high-profile speakers and maintain event flow.",
      "Willingness to work in fast-paced conference environments."
    ],
    "additionalSkills": [
      "Experience in research for moderating industry-specific panels.",
      "Familiarity with AV equipment and stage setup.",
      "Strong networking skills with tech professionals.",
      "Experience with hybrid event formats."
    ],
    "employmentType": "Freelance or Contract"
  },
  {
    "id": 26,
    "title": "Hackathon Host",
    "location": "Remote",
    "description1": "Host hackathons, guiding participants through challenges and ensuring high energy throughout the event.",
    "description2": "Coordinate with sponsors, judges, and technical teams for a successful event.",
    "jobDescription": "We are looking for an enthusiastic Hackathon Host to lead events and engage with tech-savvy participants. The role involves maintaining energy, encouraging collaboration, and highlighting key moments.",
    "requirements": [
      "Experience in hosting or organizing hackathons or coding competitions.",
      "Strong technical knowledge of programming and innovation.",
      "Excellent organizational and interpersonal skills.",
      "Ability to create an inclusive and motivating atmosphere."
    ],
    "additionalSkills": [
      "Experience with live coding or demo sessions.",
      "Familiarity with platforms like Devpost or GitHub for hackathon submissions.",
      "Social media engagement for live events.",
      "Knowledge of project evaluation and feedback processes."
    ],
    "employmentType": "Part-time or Full-time"
  }
]

export {techData , dmData , opsData , contentData , anchorData}