(ns resume.views.experience)

(defn component []
  [:div
   [:h3.josefine "Experience"]

   [:div
    [:div {:class "company"}
     [:img {:class "company-logo cambia" :src "/images/cambiahealth.jpg" :alt "cambia health solutions logo"}]
     [:h4 {:class "josefine company-name"} "Cambia Health Solutions"]
     [:h5 {:class "merriweather company-time"} "2017 - Present"]]
    [:h5.josefine "Software Dev Engineer | DevOps Team Lead"]
    [:p.merriweather "I work primarily with Node.js, Java (even some Clojure! yay!), and Python Services. I started as a Contractor doing Node and AWS development for queue based services. Converted to a full time hire in January 2018. Technologies used: Node.js, JSON, Python, AWS (EC2, ELB, Lambda, Cloudwatch, Route53, IAM, S3, SNS, SQS), ELK monitoring, Atom, Git/Github, Jira, Confluence"]]

   [:div
    [:div {:class "company"}
     [:img {:class "company-logo square" :src "/images/skillsai.png" :alt "skillsai logo"}]
     [:h4 {:class "josefine company-name"} "SkillsAI"]
     [:h5 {:class "merriweather company-time"} "2016 - Present"]]
    [:h5.josefine "Co-Founder, Architect, Senior Developer"]
    [:p.merriweather "We use Amazon Alexa and Google Actions environments to provide audible reporting and a dashboard for ecommerce store owners. Created other games and utilities on these platforms as well. Managed four developers working on the server side, in the web console and dashboard, as well as the client connectors to Woo Commerce, Shopify, and Google Analytics. Technologies used: Node.js, React/Redux, HTML/JavaScript/CSS, Bootstrap, JQuery, JSON, PHP, Python, D3.js, AWS (EC2, ELB, Cloudwatch, Route53, IAM, S3, SNS), Apache, ELK monitoring, Amazon ASK, Google Actions/API.AI, Mocha, MySQL, Postgres, psql, pgAdmin, Postman, Star UML, Woo Commerce, Shopify, Google Analytics, Stripe, vi, Atom, Git/Github, Jira, Confluence"]]

   [:div
    [:div {:class "company"}
     [:img {:class "company-logo nike" :src "/images/nike.png" :alt "nike logo"}]
     [:h4 {:class "josefine company-name"} "Nike"]
     [:h5 {:class "merriweather company-time"} "2016 - 2017"]]
    [:h5.josefine "Senior Web Application Developer"]
    [:p.merriweather "Contract project with a newly formed team of five developers to create a product personalization application for the company’s apparel and shoe lines. Project was completed early, and an offer of a permanent role was extended. Contributed to the UI, back end and the infrastructure setup and roll-out. Technologies used: React/Redux, Angular, Node.js, HTML/JavaScript/CSS, JSON, Postman, Python, D3.js, TensorFlow, Asgard, Jenkins, Mocha, Enzyme, Git/Github, Jira, Confluence"]]

   [:div
    [:div {:class "company"}
     [:img {:class "company-logo square" :src "/images/skyward.png" :alt "skyward logo"}]
     [:h4 {:class "josefine company-name"} "Skward"]
     [:h5 {:class "merriweather company-time"} "2015 - 2016"]]
    [:h5.josefine "Full Stack Developer"]
    [:p.merriweather "Contributed to a team of 11 developers in all aspects of the product from infrastructure to the core server to a unique geo-location mobile app for drone management, for which a patent is pending. Led the three person Dev Ops team, restructuring the server farm to realize more than $200K savings annually. Technologies used: Java, Spring, JUnit, React/Redux, React Native, Leaflet, D3.js, JSON, XML, Postman, Stormpath, Apache, AWS (EC2, ELB, Cloudwatch, Route53, IAM, S3, SNS), RabbitMQ, ELK Monitoring, Jenkins, Salt, Docker, Python, ESRI, Atom, vi, Git/Github, IntelliJ, Jira, Confluence"]]

   [:div
    [:div {:class "company"}
     [:img {:class "company-logo intel" :src "/images/intelLogo.png" :alt "intel logo"}]
     [:h4 {:class "josefine company-name"} "Intel"]
     [:h5 {:class "merriweather company-time"} "2014 - 2015"]]
    [:h5.josefine "Process TD Engineer"]
    [:p.merriweather "Hired six months prior to graduation as a Test Dev Engineer to automate the testing of both new design and existing wafers. In addition to automation development, owned multi-million dollar tools and modules, as well as the setup and maintenance of the web servers for a 14-person team of primarily PhD designers. Negotiated with tool vendors on component upgrades and repairs as well as new tooling. Technologies used: Python, Java, C/C++, Matlab, MS SQL, Sublime, Visual Studio Code"]]

   [:div
    [:div {:class "company"}
     [:img {:class "company-logo columbia" :src "/images/columbiasteel.png" :alt "columbia steel logo"}]
     [:h4 {:class "josefine company-name"} "Columbia Steel Casting"]
     [:h5 {:class "merriweather company-time"} "2012 - 2014"]]
    [:h5.josefine "System Administrator"]
    [:p.merriweather "Network and user administrator for engineering design firm with more than 500 employees. Responsible for server patching, upgrades and patches and assisting both engineers and non-technical personnel. Technologies used: Python, MS SQL, Powershell, Sublime"]]

   [:div
    [:div {:class "company"}
     [:img {:class "company-logo up" :src "/images/up.png" :alt "university of portland logo"}]
     [:h4 {:class "josefine company-name"} "University of Portland"]
     [:h5 {:class "merriweather company-time"} "2011 - 2012"]]
    [:h5.josefine "Media Services Technician"]
    [:p.merriweather "Responsible for setting up audio/visual equipment for school events, assisting professors with classroom equipment issues, and Help Desk work."]]])
