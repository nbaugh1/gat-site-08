module.exports = {
  siteMetadata: {
    title: `Nick Baughman`,
    description: `Personal website for Nick Baughman, a software engineer in Brooklyn, NY.`,
    author: `@nbaugh1`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-theme-jsonresume`,
      options: {
        resumeJson: {
          "basics": {
            "name": "Nick Baughman",
            "label": "Fullstack Software Engineer",
            "picture": "",
            "email": "nbaugh1@gmail.com",
            "phone": "(225)247-4814",
            "website": "http://nickbaughman.com",
            "summary": "Self motivated full-stack developer with a background in customer service pursuing a path in software development. Experienced in developing full stack applications using Ruby on Rails, JavaScript, and React/Redux. I bring a wide range of skills and attention to detail that have helped high end restaurants develop world class beverage programs with reputations for exceptional service. I am a multi-faceted person passionate in many areas of interest including philosophy, photography, drawing, and computer hardware.",
            "location": {
              "address": "405 Sterling Place, Floor 1",
              "postalCode": "NY 11238",
              "city": "Brooklyn",
              "countryCode": "US",
              "region": "New York"
            },
            "profiles": [
              {
                "network": "LinkedIn",
                "username": "nbaugh1",
                "url": "https://www.linkedin.com/in/nickbaughman/"
              },
              {
                "network": "Twitter",
                "username": "nbaugh1",
                "url": "https://twitter.com/Nbaugh1"
              },
              {
                "network": "GitHub",
                "username": "nbaugh1",
                "url": "https://github.com/nbaugh1"
              }
            ]
          },
          "work": [
            {
              "company": "1DNE",
              "position": "Software Engineer Intern",
              "startDate": "2020-04-02",
              "endDate": "2020-07-24",
              "summary": "",
              "highlights": []
            },
            {
              "company": "Flatiron School",
              "position": "Software Engineer Student",
              "startDate": "2019-06-10",
              "endDate": "2019-11-25",
              "summary": "Completed 5 month full-time online software engineering bootcamp. Studies focused on using Ruby, Ruby on Rails, JavaScript, React and Redux to build modern full-stack web applications. Topics covered include Object Oriented Programming, Model View Controller design pattern, RESTful routing, clean coding habits, building and interacting with private and public APIs and more.",
              "highlights": [
                "Project 1",
                "Project 2",
                "Project 3",
                "Project 4",
                "Project 5"
              ]
            },
            {
              "company": "Union Square Hospitality Group",
              "position": "Bartender",
              "startDate": "2019-06-01",
              "endDate": "2020-03-25",
              "summary": "Summary of Manhatta",
              "highlights": [
                "+ Brought in to aid in development and refinement of beverage program at Manhatta restaurant",
                "+ Excelled at multitasking in fast paced environment handling responsibilities including building cocktails to guests’ desired specifications, delegating tasks to team members, and tracking orders and inventory",
                "+ Organized and streamlined systems resulting in increased efficiency leading to regularly exceed sales projections, trained and educated bar and dining room teams, recruited talented new members to bar team"
              ]
            }
          ],

          "education": [
            {
              "institution": "Flatiron School",
              "area": "Software Engineering",
              "studyType": "Certificate",
              "startDate": "2019-06-10",
              "endDate": "2019-11-25"
            },
            {
              "institution": "Louisiana State University",
              "area": "Political Science",
              "startDate": "2002-09-01",
              "endDate": "2006-05-01"
            }
          ],
          "skills": [
            {
              "name": "Frontend Development",
              "keywords": ["HTML", "CSS", "Javascript", "React", "Redux", "Gatsby"]
            },
            {
              "name": "Backend Development",
              "keywords": [
                "Ruby on Rails",
                "API",
                "REST",
                "MVC",
                "PostgreSQL",
                "GraphQL"
              ]
            },
            {
              "name": "Fullstack Development",
              "keywords": [
                "Ruby",
                "Javascript",
                "API",
                "OOP",
                "Sinatra",
                "MVC",
                "JAMStack",
                "REST",
                "Ruby on Rails"
              ]
            }
          ],
          "languages": [
            {
              "language": "English",
              "fluency": "Native speaker"
            }
          ]
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `npb-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
