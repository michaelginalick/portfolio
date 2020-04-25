import flag from './download.png';
import cli from './num.png';
import star_search from './star_search.png';

const aboutMe = "I’m an experienced software developer who has worked in early stage startups and large established companies. \
I started my career working for a large bank in the midwest automating test cases. \
This position entailed training and working closely with other team members to establish their programming skills. \
I held one-on-one sessions as well as lead group training sessions. "

const second = " From there I moved on to a proper software developer role. I have substantial experience working in Ruby on Rails and a variety of javascript frameworks. \
My professional experience includes building RESTful APIs, creating complex user work flows in single page applications, enhancing ETL pipelines, and data modeling. \
I’ve worked across the stack and feel comfortable on each side."


const third = " Continuous learning is something I feel passionate about. \
When I’m not helping build products I’m pursuing a masters degree at the Georgia Institute of Technology. \
The curriculum has broadened my technical horizons	writing programs in Java, C, C++, and python. Although Ruby is the language I’m most comfortable with I’m happy to program in any language."

const fourth = " Besides staring at a computer screen I also enjoy training for and completing in triathlons. \
I have 4 olympic distance races under my belt and look forward to completing more. \
On nice Sunday mornings you can find me at Oak street beach swimming in Lake Michigan."

export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'',
        headerTagline: [//Line 1 For Header
                        "Hi, my name is Michael Ginalick.",
                        //Line 2 For Header
                        "I'm a software developer ",
                        //Line 3 For Header
                        'currently residing in Chicago'
    ],
        //Contact Email
        contactEmail:'michael.ginalick@gmail.com',
        // Add Your About Text Here
        abouttext: aboutMe,
        second: second,
        third: third,
        fourth: fourth,
        aboutImage:'',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:false,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           [
               {
                    id: 1,//DO NOT CHANGE THIS (Please)😅
                    title:'Chicago Fun Times Calendar', //Project Title - Add Your Project Title Here
                    service:'Golang, VueJS, AWS, NGINX', // Add Your Service Type Here
                    //Project Image - Add Your Project Image Here
                    imageSrc: flag,
                    //Project URL - Add Your Project Url Here
                    url:'http://chicagofuntimescalendar.com/'
                },
                {
                    service: "This is a side project that attemps to capture all the events going on around Chicago. \
                              It's built with VueJS and Golang and deployed to AWS. The calendar interface is a custom calendar that \
                              speaks with a Go RESTFUL API. The server can injest a CSV creating single and multiday events. I had been wanting \
                              to build something with Go for awhile and it was great experience. To enhance my front end skills I opted to make the calendar \
                              from scratch. The exercise was a lot of fun and I certainly learned a lot as it was more tricky than I originally thought."
                }
            ],
            [
                {
                    id: 2,//DO NOT CHANGE THIS (Please)😅
                    title: 'Command Line Pomodoro Tracker',
                    service: 'Golang',
                    imageSrc: cli,
                    url: 'https://github.com/michaelginalick/go_pomodoro'
                },
                {
                    service: "A command line tool made with Golang. With it you can track your pomodoro sessions while at work or studying. \
                              You can enter the number of minutes you'd like to concentrate for, up to one hour, and it'll count down the remaining time. \
                              This will enable you to not be distracted and wondering how much time you have left. \
                              Ideally you can concentrate on the task at hand until the clock hits 0:00.  "
                }
            ],
            [
                {
                    id: 3,
                    title: 'Star Search',
                    service: 'JavaFX',
                    imageSrc: star_search,
                    url: 'https://www.youtube.com/watch?v=EENWmCX_sXQ'
                },
                {
                    service: "A desktop Java application that was the final project in CS6310 – Software Architecture & Design. \
                              The application was developed over the semester and was iterated upon many times. \
                              Starting from a simple command line tool and a few classes we added a user interface via JavaFx and many more classes. \
                              The program evolved into a multithreaded application where users can choose between manual and automated game play. \
                              Accompanying the program was full UML documentation including sequence and deploy diagrams. \
                              It's worth nothing that due to academic policy at Georgia Tech I am unable to post source code on a publicly accessible repository. \
                              Please contact me for additional information."
                }
            ]
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/michaelginalick'
            },
            {
                name:'LinkedIn',
                url: 'https://www.linkedin.com/in/michael-ginalick-a90b371a3/'
            }
        ]
    }