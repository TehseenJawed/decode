import React from 'react'
import blogImage from '../../assets/images/blog1.jpg'
import { Link } from 'react-router-dom'
import '../../styles/home/index.css'
import InnerHeader from "../../components/InnerHeader";
import Image from "../../assets/inner_page_images/about_image.png";
import ClientsLogosImage from "../../assets/inner_page_images/clients_image.png";
import GreenLineImage from "../../assets/inner_page_images/green_lines_image.png";

export default function Blogs() {
    const componentDetails = [
        {
          backgroundGradientColor: {
            deg: "270",
            minColor: "#a920e1",
            maxColor: "#0dcaee",
          },
          gradientContainerImage: Image,
          headerImage: require('../../assets/inner_page_images/blog-white.svg'),
          gradientContainerSectionName: ["","Blogs"],
          gradientContainerSectionNameUnderlineColor: "#FDCD08",
          gradientContainerWhiteHeading: "Featured Blogs",
          gradientContainerRedHeading: "",
          buttonContainerTitle:
            "We Innovate",
          buttonContainerDescription:
            "We work by providing innovative and ingenious solutions to small and large-scale businesses. Every day, we strive to assist you in augmenting your brand’s online visibility, increasing reach & engagement with your target audience, and eventually driving sales.",
          buttonContainerGreenLinesImage: GreenLineImage,
          buttonContainerButtonTitle: "Schedule Time To Talk",
          clientsContainerTitle:
            "Our Clients Include 150 Global Brands, Silicon Valley Founders",
          clientsContainerlogos: ClientsLogosImage,
        },
      ];
    const Blogs = [
        {
            head: 'The most important lessons I’ve learned after a year of working with React',
            services: 'Services: Lesson of working with React',
            skills: 'Skills: React',
            blogImg:'https://miro.medium.com/max/2868/1*TheYckj9udF4qLjoJW8sjg.png',
            blogDetails: {
                mainHeading:'The most important lessons I’ve learned after a year of working with React',
                headerImage:'https://miro.medium.com/max/2868/1*TheYckj9udF4qLjoJW8sjg.png',
                bodydesc: ` Starting out with a new technology can be quite troublesome. You usually find yourself in a sea of tutorials and articles, followed by millions of personal opinions. And every single one states that they found the “right and perfect way.” <br />
                This leaves us debating whether our chosen tutorial will be a waste of time or not. <br />
                Before diving into the ocean, we must understand the underlying concepts of a technology. Then we need to develop a technology-based mindset. If we are starting to learn React, we first have to think in React. Only later on we can start mixing various mindsets into one. <br />
                In this article we’ll be covering some lessons I learned regarding this mindset from my personal experiences with React. We’ll go over the days at work and nights with personal projects and even the talk I gave at a local JavaScript event. <br />
                So let’s go!`,
                heading2:'React is evolving, so you must be up to date',
                heading2desc1:`If you remember the initial announcement of version 16.3.0, you’ll remember how excited everyone was.<br /><br />
                Here are some of the changes and improvements we received:`,
                serve:['Official Context API', 'createRef API', 'forwardRef API', 'StrictMode', 'Component Lifecycle Changes'],
                kjk:`The React Core team and all the contributors are doing a great job trying to improve the technology we all adore. And in version 16.4.0 we received Pointer Events. <br />
                Further changes are surely coming, and it’s only a matter of time: Async Rendering, Caching, version 17.0.0 and many others not yet known. <br />
                So if you want to be at the top, you have to be up to date with things that are happening in the community. <br />
                Know how things work and why they are being developed. Learn what problems are being solved and how development is being made easier. It’ll really help you out. <br /><br />`,
                heading3:'Don’t be afraid to split your code into smaller chucks',
                heading3desc:['React is component-based. So you should leverage this concept and not be afraid to split bigger pieces into smaller ones.', 'Sometimes a simple component can be made of 4–5 lines of code, and in some cases, it is totally fine.', 'Make it so that if a new person jumps in, they won’t need days to understand how everything works....'],
                blogHref:'https://medium.com/free-code-camp/mindset-lessons-from-a-year-with-react-1de862421981',
                blogImg:'https://miro.medium.com/max/2868/1*TheYckj9udF4qLjoJW8sjg.png',
                blogdesc:[
                    'Starting out with a new technology can be quite troublesome. You usually find yourself in a sea of tutorials and articles, followed by millions of personal opinions. And every single one states that they found the “right and perfect way.”',
                    'This leaves us debating whether our chosen tutorial will be a waste of time or not.',
                    'Before diving into the ocean, we must understand the underlying concepts of a technology. Then we need to develop a technology-based mindset. If we are starting to learn React, we first have to think in React. Only later on we can start mixing various mindsets into one.',
                    'In this article we’ll be covering some lessons I learned regarding this mindset from my personal experiences with React. We’ll go over the days at work and nights with personal projects and even the talk I gave at a local JavaScript event.'
                ],
            }
        },
        {
            head: 'How to Choose the Best Project Management Software for Your Team',
            services: 'Services: Project Management',
            skills: 'Tool: JIRA',
            blogImg:'https://miro.medium.com/max/2363/1*Zl77kSHXBSGyl4QTZ1oeXg.jpeg',
            blogDetails: {
                mainHeading:'What features to look for when choosing the right Project Management Software for your team',
                headerImage:'https://miro.medium.com/max/2363/1*Zl77kSHXBSGyl4QTZ1oeXg.jpeg',
                bodydesc: ` You want the best for your company. No surprise there. Everyone does. From employing the right HR team to exceeding client expectations, there is a lot that a company can do to succeed. And that includes having an effective Project Management team.” <br />
                 <br />
                 If you’re like many companies nowadays who have chosen the route of remote team members. Not only does it allow the freedom for employees to work remotely and avoid the painstaking commute but it saves you on office space and grants you access to an entire world of talent. But no amount of expertise assembled together from the four corners of the earth will be effective without proper project management software to back up their efforts. <br />
                 These are things you need to consider when deciding what management software to choose. Are you looking for help with reporting? Do you prefer to customize all models or would you be more comfortable with templates? Similarly, PM goals can be broken down into more technical needs by focusing on software that implements tools for communication, automatization and time tracking apps. Also, be on the lookout for software with excellent security data protection.<br />
                 To make the decision on what will fit your company’s needs the most, consider using a decision mental model to essentially cut through the noise and make a smart decision. Consider it an exercise in project management methodology. While doing so, consider these three questions: Are the communication needs being met? Is the software providing the tools needed for your projects? And finally, is it making the job easier to accomplish?`,
                heading2:'The Sharpest Tools in the Shed',
                heading2desc1:`No project management plan would be achievable without the correct tools to go with the correct team members. The software you choose needs to be just as well selected as any team hire. Keep in mind your list of requirements that are needed to help your PM team succeed with each project. Such as time tracking for each remote employee. Often apps such as Youtrack or WhenIWork can come into play for that but is there a software package that already includes it? If you rely heavily on agile reporting consider JIRA as your software. Along with winning FinancesOnline’s award of “Great User Experience 2017” it boasts knowledge management, well-documented development flow, real-time collaboration, internal and external project management and of course agile reporting.<br /><br />
                JIRA comes in three different formats:`,
                serve:['JIRA Core: typical project management software, generic in every way.', 'JIRA Software: base software along with agile project management features', 'JIRA Service Desk: IT or Business Service Desk.'],
                kjk:`Again, it’s important to narrow down what type of functions you’d like your software package to come with. JIRA starts out with 10 users for $10/month or 11–100 for $7/month. <br />
                If the Kanban method appeals to your team, you might want to check out Monday.com. Functioning as a single board, members can see who’s working on what and the 100% transparency might be helpful if team leaders need task updates but struggle to get it from distance members. Another great feature is it allows clients themselves to be invited as guest viewers, allowing them to track project progress. Monday.com starts off at $29/month for 5 users at 5GB however it maxes at 10 users for $59/month. <br />
                Another software to consider is Wrike. Geared especially for remote project management teams, Wrike was one of the first to make use of the Gantt chart. Working well with quite a few popular third-party apps such as Google Drive, Dropbox, MS Project, Excel, Box, Salesforce, Zapier, and Github to name a few, this software specializes in burndown charts or workload view, resource assignment, set dates, shave files and individual and group tagging with @mention. Wrike also offers what’s called a “Duplication Feature” which saves the skeleton of previous plans and if a new one is similar, it will launch a customizable old plan to save on formatting. <br />
                The free plan allows up to 5 users and then expand to the Professional package of $49/month and up to 15 users and then on to Enterprise at $99/month to up to 5,000 users and 5GB. Ideal for companies with large PM teams. <br /><br />`,
                heading3:'Making the Plan Easy',
                heading3desc:[],
                blogHref:'https://blog.zipboard.co/how-to-choose-the-best-project-management-software-for-your-team-8939d0b071c',
                blogImg:'https://miro.medium.com/max/2363/1*Zl77kSHXBSGyl4QTZ1oeXg.jpeg',
                blogdesc:[
                    'The whole point of acquiring PM software is to move away from Excel spreadsheets and into the new age of digital project planning. There are a lot out there so narrowing down what you’re looking for will make the selection process easier. Most plans come with a 30-day trial period so don’t be afraid to try one out and then another until one fits your needs. If the trial ends and you’re still unsure, remember most software allows monthly payments so don’t be afraid to try it out even though you might need to pay monthly afterward. No one will fault you for being thorough.',
                    'Bear in mind that once you’ve started using particular software, it’s good to take a step back and reassess. How’s it going in general? Does your Project Manager thrive under it? Are clients happy with the new software interactions? Is it easy for them to navigate? Are your financial expectations in line with plan cost and actual cost?',
                    'As you plan and select consider the configuration capabilities of each software. Good software is continuously working to improve and prepare for the future state of project planning. If your project management team includes members of the IT department that might want to way in on whether or not the software can be hosted in-house by the company’s IT department or in the Cloud.',
                    'At the end of the day, you want to select a software that’s going to allow your project manager to be organized and reach the end goal for each project and not only meet client expectations but exceed them. With your project manager at a steady helm, they’ll be better equipped to manage teams and even multiple projects. Remember to zero in on where your team may be lacking. If communication, focus on software that boasts excellent communication tools or at least popular third-party chat apps. Likewise, if team members need to know who is working on what, select software that has transparency with to-do lists, tasks being handled and tasks already accomplished.'
                ],
            }
        },
        {
            head: 'The React Handbook',
            services: 'Services: Learn React',
            skills: 'Skills: React',
            blogImg:'https://miro.medium.com/max/3820/1*m5aPLXkrWJs7xKsfYViJEg.png',
            blogDetails: {
                mainHeading:'The React Handbook',
                headerImage:'https://miro.medium.com/max/3820/1*m5aPLXkrWJs7xKsfYViJEg.png',
                bodydesc: ` The React Handbook follows the 80/20 rule: learn in 20% of the time the 80% of a topic. <br />
                 I find this approach gives a well-rounded overview. This book does not try to cover everything under the sun related to React, but it should give you the basic building blocks to get out there and become a great React developer. If you think some specific topic should be included, tell me. You can reach me on Twitter @flaviocopes.<br />
                 I hope the contents of this book will help you achieve what you want: learn the basics of React.<br />
                 You can get this ebook in PDF, ePub and Mobi format at reacthandbook.com.<br />
                 `,
                heading2:'An introduction to the React view library What is React?',
                heading2desc1:`React is a JavaScript library that aims to simplify development of visual interfaces. Developed at Facebook and released to the world in 2013, it drives some of the most widely used apps, powering Facebook and Instagram among countless other applications.<br /><br />
                At the time when React was announced, Ember.js and Angular 1.x were the predominant choices as a framework. Both these imposed so many conventions on the code that porting an existing app was not convenient at all.`,
                serve:[],
                kjk:`React made a choice to be very easy to integrate into an existing project, because that’s how they had to do it at Facebook in order to introduce it to the existing codebase. Also, those 2 frameworks brought too much to the table, while React only chose to implement the View layer instead of the full MVC stack. <br />
                At the time, Angular 2.x was announced by Google, along with the backwards incompatibility and major changes it was going to bring. Moving from Angular 1 to 2 was like moving to a different framework, so this, along with execution speed improvements that React promised, made it something developers were eager to try. <br />
                Being backed by Facebook is, of course, going to benefit a project if it turns out to be successful. Facebook currently has a strong interest in React, sees the value of it being Open Source, and this is a huge plus for all the developers using it in their own projects. <br /><br />`,
                heading3:'Is React simple to learn?',
                heading3desc:['Even though I said that React is simpler than alternative frameworks, diving into React is still complicated, but mostly because of the corollary technologies that can be integrated with React, like Redux and GraphQL.', 
                'React is a library, so saying install might sound a bit weird. Maybe setup is a better word, but you get the concept. There are various ways to setup React so that it can be used on your app or site.', 
                'Make it so that if a new person jumps in, they won’t need days to understand how everything works....'],
                blogHref:'https://medium.com/free-code-camp/the-react-handbook-b71c27b0a795',
                blogImg:'https://miro.medium.com/max/3820/1*m5aPLXkrWJs7xKsfYViJEg.png',
                // blogdesc:[
                //     'Starting out with a new technology can be quite troublesome. You usually find yourself in a sea of tutorials and articles, followed by millions of personal opinions. And every single one states that they found the “right and perfect way.”',
                //     'This leaves us debating whether our chosen tutorial will be a waste of time or not.',
                //     'Before diving into the ocean, we must understand the underlying concepts of a technology. Then we need to develop a technology-based mindset. If we are starting to learn React, we first have to think in React. Only later on we can start mixing various mindsets into one.',
                //     'In this article we’ll be covering some lessons I learned regarding this mindset from my personal experiences with React. We’ll go over the days at work and nights with personal projects and even the talk I gave at a local JavaScript event.'
                // ],
            }
        },
    ]
    return (
        <div>
            <InnerHeader componentDetails={componentDetails} />
            <div className='blogContainer homeslider'>
            {Blogs.map((v, i) => {
                const { head, services, skills, blogImg, blogDetails } = v
                return (
                        <div className='blogBox'>
                            <img className='blogImage' src={blogImg} alt='blog1' />
                            <hr />
                            <div className='blogBody'>
                                <h5>{head}</h5>
                                <hr />
                                <p>{services}</p>
                                <p>{skills}</p>
                                <hr />
                                <Link to={{pathname:'/blog/readmore', state:blogDetails}}><button>Read More</button></Link>
                            </div>
                        </div>
                )
            })}

            </div>

        </div>
    )
}