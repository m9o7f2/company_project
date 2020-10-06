var scroll = new SmoothScroll('*[href*="#"]',{
    speed: 700,
    offset: 150
});

window.onload = function () {
    if(document.body.classList.contains("home")){
         new Splide('.splide', {direction:localStorage.getItem("lang") == "ar" ? "rtl":"ltr", type:'loop',perPage:window.innerWidth < 990? 1 : 3 ,focus: 'center',}).mount()
    }
}

//wow js int
function wow_js () {
    var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow.init();
}
wow_js ()

//bading top

function paddingT(){
    let fixer = document.querySelector(".fixer").offsetHeight;

    document.body.style.paddingTop = fixer + "px";
}
paddingT()
//change img-header
function header_img () {
    var header = document.querySelector("header");
    if(header.classList.contains("bg-ch")){
        setInterval(function(){
            let im = ["url('img/header-img/01.jpg')","url('img/header-img/02.jpg')","url('img/header-img/03.jpg')"];
            let I = Math.floor(Math.random() * 6);
            let finalI = im[I];
            header.style.backgroundImage = finalI
        },30000)
    }
}
header_img ()
//add animation-class
function add_anmation() {
    let serv = document.querySelectorAll(".serv");
    //console.log(indexof(serv[0]))
    for(i=0; i < serv.length ; i++){
        if(i % 2 == 0){
            serv[i].classList.add("animate__fadeInLeft");
        }else{
            serv[i].classList.add("animate__fadeInRight");
        }

    }
}
add_anmation()

// up show

function up(){
    window.onscroll = function(){
        if(window.scrollY > 500){
            document.querySelector(".top").style.opacity = "1"
        }else{
            document.querySelector(".top").style.opacity = "0"
        }
    }
}
up();

//translate section js-object


var EN = {
    //navbar trans
    position:"Baghdad Sinaa street-Alfaisal building-office 17",
    Home:"Home",
    services:"services",
    All:"All",
    Backup:"Backup solution",
    Database:"Database Services",
    CCTV:"CCTV",
    Data_Center:"Data Center design / Bulid Construction services",
    Harfware:"Harfware and SoftWare Supply",
    IT_support:"IT support Services",
    IPTV:"IPTV",
    Mobile_Application:"Mobile Application Devlopment",
    Our_Work:"Our Work",
    English:"عربــي",
    // header trans
    About_us:"About us",
    Contact:"Contact",
    PerfectIT:"Perfect IT solutions for Your Business",
    We_are_well:"We are well-versed in a variety of operating systems, networks, and databases. We use this expertise to help our customers by offering them a fit for purpose and cost effective services which save your time and budget.",
    Read_More:"Read More",
    See_Our_Work:"See Our Work",
    //about-us trans
    More_than:"More than 3+ years we provide <span data-content= 'Solutions'>It Solutions</span> ",
    Solutions:"It Solutions",
    Successful:"Successful organizations have access to all major software vendors, choose the right piece of software at the right price, enabling them to become more cost-effective and to move with future trends. Innovation Legend will be with you during the success journey and bring to you the latest technology and support you with a long term services.",
    In_Innovation:"In Innovation Legend we believe in long term relationship with our customer and the first step toward building this relationship is gaining the trust by provide solution for each challenge. This is our spirit and intention to become a business partner not only solution provider.",
    //our-services
    We_Provide:"We Provide Exclusive services For your Business",
    Mobile_Application_i:"The fact that people these days spend more time on phone than on PCs is great for businesses — if you adjust your marketing plan to match this shift.Evidently, your business will be exposed to numerous eyeballs if you have mobile presence. Your image",
    Database_i:"Let us take the complexity out of database management. Our certified DBAs provide the deep expertise you need to manage MySQL®, Oracle® and Microsoft® SQL Server® and optimize their performance. Whether you’re running on dedicated hardware or on one of our cloud servers",
    Backup_i:"Protecting yourself from loss is not as much about having a backup as it is your ability to recover information and items. It’s one thing to have a backup system in place, it’s another to know that backup will not fail and that you will always be able to retrieve valuable information, no matter what happens.",
    Harfware_i:"Choosing the right IT equipment is an important consideration for your business. The computer is the pen and paper of the modern age, and it’s a hard truth that your employees are only as good as the equipment they work on. Reliable hardware that can stand the test of time, combined with the correct software, will support you faithfully day after day.",
    IT_support_i:"Put your IT support fully in our hands. Our management programme is a fixed-investment approach to proactively finding and preventing computer issues on a day-to-day basis before disaster strikes. In the event that something does break down, a guaranteed fast response time is just one of the many benefits of having a managed IT support programme with Bespoke Computing.",
    Data_Center_i:"Innovation Legend also installs electrical systems and communications cabling to make your business thrive. We manage all aspects of site selection, design, construction, commissioning and maintenance of your mission critical data centers.",
    CCTV_i:"One security system that is CCTV cameras fulfill all your requirements and protect you in all manners either you are using it for office or for home. This security system has special and different functionality that separates it from all security systems. CCTV cameras come in several modes like recording only, recording with sound effect, hidden CCTV cameras and so on.",
    IPTV_i:"Internet Protocol Television or IPTV is a fast emerging concept which has gained much popularity in the recent years. The various features of IPTV provide a number of benefits and enhance the television viewing experience. It provides users the freedom to view content of their choice. It also offers flexibility by allowing them to view programs at a time suitable for them.",
    see_more:"See More",
    //our-services pages------>
    //our-services pages-Mobile Applications ------>
    Mobile_Applications_page_t:"What is Mobile Application?",
    Mobile_Applications_page_cont:"Mobile Apps are internet applications designed to run on smartphones and other mobile devices. According to webopedia.com, mobile applications help users by connecting them to Internet services more commonly accessed on desktop or notebook computers.Everybody knows the importance of going directly to where your customers are and although the app revolution only started a few years ago, this form of marketing is growing fast with no signs of slowing down.Currently 77 % of the world’s population are online. With the rapid adoption of smartphones and tablets businesses are faced with more and more opportunities every day that will radically change how their service or product is delivered and accessed.There are more mobile devices in the world than the total number of computers and television units combined, meaning your business needs a mobile presence to stay connected with its customers.Mobile apps are sometimes categorized according to whether they are web-based or native apps, which are created specifically for a given platform. A third category, hybrid apps, combines elements of both native and Web apps. As the technologies mature, it’s expected that mobile application development efforts will focus on the creation of browser-based, device-agnostic Web applications.If, in your opinion, mobile applications are exclusively for worldwide corporations and big name brands such as Bank of America or Walmart, you’re totally mistaken. Nowadays, more and more midsize, and even small, companies are following mobile application development trends. Market conditions make the businesses think that an efficient mobile strategy requires more than just a user-friendly website.",
    
    //our-services pages-database Services ------>
    Let_us_take:"Let us take the complexity out of database management. Our certified DBAs provide the deep expertise you need to manage MySQL®, Oracle® and Microsoft® SQL Server® and optimize their performance. Whether you’re running on dedicated hardware or on one of our cloud servers, our experts are here to help with architecture design guidance, administration, monitoring and troubleshooting",
    Database_page_p_2:"Database Platforms",
    Database_page_p_3:"MySQL support for Innovation Legend customers includes:",
    Database_page_li_Install:"nstallation",
    Database_page_li_2:"Configuration Assistance",
    Database_page_li_3:"Basic Troubleshooting Assistance",
    Database_page_li_4:"Optional Database Backup Agent",
    Database_page_li_5:"Expert Advice and Consultation",
    Database_page_p_4:"Advanced MySQL projects:",
    Database_page_li_6:"Configuration of MySQL replication or advanced installation options",
    Database_page_li_7:"MySQL Server performance analysis and optimization",
    Database_page_li_8:"Initial overall environment assessment (complete database server analysis, including MySQL and operating system)",
    Database_page_li_9:"MySQL Server performance and resource utilization",
    Database_page_li_10:"Analysis of slow queries",
    Database_page_li_11:"Query optimization and proper indexing",
    Database_page_p_5:"Benefit from our deep expertise managing and supporting MS SQL as we provide:",
    Database_page_li_12:"Monitoring to ensure all critical services remain available",
    Database_page_li_13:"Security access administration, including passwords and schemas",
    Database_page_li_14:"Maintenance and proactive tuning for end user and application access",
    Database_page_li_15:"Point release upgrades and prerequisite patching as needed",
    Database_page_p_6:"Oracle Support for Innovation Legend Customers:",
    Database_page_li_17:"Convenient monthly licensing",
    Database_page_li_18:"Configuration",
    Database_page_li_19:"Initial environment assessment and performance adjustments",
    Database_page_li_20:"Database environment monitoring and statistics collection",
    Database_page_li_21:"Emergency escalations to senior DBA 24x7x365",
    Database_page_li_22:"Troubleshooting",
    Database_page_li_23:"DBA consultation for performance optimization",
    Database_page_li_24:"Optional live database backup agent",
    
    //our-services pages-backup Services ------>
    backup_page_p_1:"Losing a key piece of computer equipment and, along with it, key electronic files, can be a devastating blow to your business. Being prepared for accidental loss is just as crucial as protecting yourself from external and internal security threats. What would it mean to you to lose the most important piece of information on your system, right now? Would you be able to get it back? Are you certain? Nothing in your business can be too secure. Bespoke Computing believes you should be protected from against everything, including",
    backup_page_li_1:"(a) Losing a file,",
    backup_page_li_2:"(b) Losing an entire computer system, and",
    backup_page_li_3:"(c) The loss of an entire site or office.",
    backup_page_p_2:"Protecting yourself from loss is not as much about having a backup as it is your ability to recover information and items. It’s one thing to have a backup system in place, it’s another to know that backup will not fail and that you will always be able to retrieve valuable information, no matter what happens.",
    //our-services pages-backup Services ------>
    Harfware_page_p_1:"Choosing the right IT equipment is an important consideration for your business. The computer is the pen and paper of the modern age, and it’s a hard truth that your employees are only as good as the equipment they work on. Reliable hardware that can stand the test of time, combined with the correct software, will support you faithfully day after day.",
    Harfware_page_p_2:"Making a poor purchasing decision with your computer equipment can have costly repercussions. If you are looking for cheap solutions, don’t expect high performance, lost-lasting hardware that will continue to reward you.",
    Harfware_page_p_3:"Again, if you’re thinking of purchasing appropriate software and licensing for your business, it’s a job that needs to be done well. Each business’ requirements are unique, whether you need comprehensive Human Resources software or Microsoft Office installing on two hundred computers. The right tools will help you to increase your impact and efficiency.",
    Harfware_page_p_4:"Business leaders choose Innovation Legend to supply and install their hardware and software because they trust our expertise to select the right products to meet their needs. We work with established and credible distributors to source only the best equipment. It may not always be the cheapest option, but our clients truly believe that price is no substitute for value and future-proofing.",
    //our-services pages-It suppore Services ------>
    IT_support_page_p_1:"In today’s world, there are few companies for whom computer systems are not essential. Technology has fundamentally changed the way we do business daily, from the computers your employees work on to the servers that store your data.",
    IT_support_page_p_2:"Keeping these systems functioning effectively and without costly disruption is crucial to the success of your organization. When it comes to protecting your business, you should only choose the best. You need expert support, so that should something happen it won’t leave you vulnerable and you can get back on your feet fast.",
    IT_support_page_p_3:"Our IT support can be broken down into three fundamental approaches",
    IT_support_page_p_4:"Managed IT Support Programmes :",
    IT_support_page_p_5:"Put your IT support fully in our hands. Our management programme is a fixed-investment approach to proactively finding and preventing computer issues on a day-to-day basis before disaster strikes. In the event that something does break down, a guaranteed fast response time is just one of the many benefits of having a managed IT support programme with Bespoke Computing.",
    IT_support_page_p_6:"Preventative Maintenance :",
    IT_support_page_p_7:"Routine servicing for your computer systems that will drastically reduce the likelihood of something breaking unexpectedly. This service can extend the lifetime of your systems by as much as twenty per cent.",
    IT_support_page_p_8:"Overflow support :",
    IT_support_page_p_9:"A useful service for established IT teams or departments within businesses. Whether it’s a helping hand needed during busy periods or holidays or some specialized knowledge for more complicated setups and environments, our experts will integrate with your staff to provide that additional expertise when necessary",
    
    //our-services pages-Data Center Services ------>
    Data_Center_page_p_1:"Innovation Legend provides data center design/build construction services for mission critical facilities. Innovation Legend also installs electrical systems and communications cabling to make your business thrive. We manage all aspects of site selection, design, construction, commissioning and maintenance of your mission critical data centers.",
    Data_Center_page_p_2:"Through a careful data center assessment, we can determine the optimum mission critical facility design and build it to meet your needs. If you are going through a move, our data center engineers will dismantle your current infrastructure and assist with a new computer room design for the new location. As a general contractor, we also handle data center consolidation. If your current infrastructure relies on a mission critical design, our build teams can effectively consolidate your infrastructure into a single efficient and economical data center construction.",
    Data_Center_page_p_3:"The data center world is changing rapidly.  Let our data center specialists help you today.  Innovation Legend offers solutions that are energy efficient, deliver the reliability you demand, and are scalable and modular.  We can handle all of your IT infrastructure needs from computer room design to data  center Electrical Systems, UPS installations, Mechanical Systems and Preventative Maintenance. Contact us TODAY for your turnkey mission critical facilities solution. Innovation Legend “WE BUILD DATA CENTERS™",
    

    //our-services pages-CCTV Services ------>
    CCTV_page_p_1:"Nowadays crime has been increasing in a fast mode. Due to this the whole world is in panic. The only solution to get rid of this problem is to set up a security system around you and your home.",
    CCTV_page_p_2:"There are lots of kind of security systems are available in the market. Every security system has special features and is of different functionality that suits your requirements. The need of security system depends on the mode of work like commercially you want or for your home you need security.",
    CCTV_page_p_3:" One security system that is CCTV cameras fulfill all your requirements and protect you in all manners either you are using it for office or for home. This security system has special and different functionality that separates it from all security systems. CCTV cameras come in several modes like recording only, recording with sound effect, hidden CCTV cameras and so on.",
    
    //our-services pages-IPTV Services ------>
    IPTV_page_p_1:"Internet Protocol Television or IPTV is a fast emerging concept which has gained much popularity in the recent years. The various features of IPTV provide a number of benefits and enhance the television viewing experience. It provides users the freedom to view content of their choice. It also offers flexibility by allowing them to view programs at a time suitable for them.",
    IPTV_page_p_2:"IPTV can effectively be used to view normal television, remote windows, adverts, special services, VoD and many more things. For viewing normal television, the IPTV channels list may be subscribed. The channels list can be used to select the preferred channels.",
    IPTV_page_p_3:"From the perspective of advertising, IPTV helps advertisers to base their advertisements and campaigns on the detailed demographic information available. The channels subscribed by IPTV users can provide advertisers the relevant information about the lifestyle and choice of customers. On the basis of this information, they can identify their target audience and design advertisements accordingly.",

    //our_work_section & main page
    The_Latest_Work:"The Latest Work",
    POS:"POS",
    POS_i:"Innovation legend has implemented customized point of sale (POS) solution for Klara company. The solution supports many features like vendor management and store management. Our POS solution also designed to generate different reports for sales and stock statistics.",
    R_M_S:"Restaurant management system",
    R_M_S_i:"Our solution to manage the restaurant provide a complete set of features that makes restaurant management easy and productive.",
    O_E_S:"Online exam system",
    O_E_S_i:"In order to support our country during the COVID-19 pandemic, Innovation legend has implemented an online exam system to enable our student to do their university exam online. Our solution been tested and confirm its stability for more 11 thousand students.",
    I_S_B:"Invoice system for Becast",
    I_S_B_i:"BeCast is one of the most famous construction company in Baghdad and they are our customers for 3 years now. We have implemented to Becast a solution for invoicing which support different customers and invoice history.",
    E_Learn: "E-learning system ",
    E_Learn_i: "By utilizing Microsoft education tools we have built a complete e-learning solution for universities. We provide a communication tools between the student and instructors, online storage and supporting tools for learning. The solution is customized to perform other task related student registration, courses system, Student records and other subsystem.",
    Sinna: "Sinna street app",
    Sinna_i: "Sinna street app The mobile application technology is everywhere now and innovation legend is one of the company which take a lead in this domain by design and implement the sinaa street application, sinaa street application is an ecommerce application for IT devices and software.",
    radio: "Radio one FM application",
    radio_i: "Innovation legend implemented a project for radio one fm to implement a mobile application for their radio. The mobile application enables the audience of radio one fm follow the recent live stream video and recent updates and programs",
    GPM: "GPM",
    GPM_i: "Dedicated ecommerce application for PC, PC parts and laptops. GPM application enable the buyers to find a variety of choices to buy a laptop with special specifications, Desktop for design or gaming, or if they want to upgrade their desktop to a higher specification.",
    farahedi: "Al farahedi application",
    farahedi_i: "Innovation legend provided a mobile application for al farahidi student to follow up with their lectures and different announcement that university would like to spread. Through the mobile application the student can find also their exam result as well as their attendance status for each course",
    //our-work pages-POS ------>
    pos_page_p_1:"A Point of Sale (POS) is technically a system in a retail store from which you conduct the sale of physical goods. In a store, a POS is where the checkout happens, orders are processed and bills are paid.<br><br>A POS System is the overall hardware and software system used for billing in a POS Store. It usually consists of the following units for displaying the order total, product weight, etc. and other hardware units for scanning product barcodes, a printer for receipts and a cash register.<br><br>The Software that runs on the POS System is what is usually referred to as the POS Software. Much like your laptops that run on Windows or Mac, or your phones that run on Android or iOS, a POS software serves as the terminal’s operating system.<br><br>In the POS software interface, you can input data about the products that you will sell, tally order costs and transact financially. The POS software helps you to process orders in a retail store with the help of available hardware.<br><br>Innovation legend has implemented customized point of sale (POS) solution for Klara company. The solution supports many features like vendor management and store management. Our POS solution also designed to generate different reports for sales and stock statistics.<br><br>",
    //our-work pages-RMS ------>
    rms_page_p_1:"A restaurant management system is a collective term for software that helps streamline food business operations. Namely, restaurants, bars, bakeries, cafes, cloud (dark, virtual, ghost) kitchens, food trucks or delivery businesses.<br><br>It combines all things that are good about the traditional POS (Point of Sale) systems, with tools that manage your phone calls, take table reservations, streamline inventory management, handle billing, provide actionable analytics, and also help with marketing activities such as CRM, loyalty programs and building an online presence. It also works seamlessly with your existing restaurant technology systems.<br><br>(your accounting and employee management software) and uses open APIs that let you integrate with any third party tool.<br><br>Our solution to manage the restaurant provide a complete set of features that makes restaurant management easy and productive.<br><br>",
    //our-work pages-OES ------>
    oes_page_p_1:"Exam System is designed for Schools, Colleges, Universities, Institutes, education establishment places and employment agencies to deliver exams and publish results to students, Examination System provides board examinations. Our Exam Management Software provides exams at the board and at the local level to facilitate examination.  Online Examination System designed for board examinations whereas exam system used for exam preparation and practice exams. One can consider that the exam system can also be used for practice tests. Online practice provides the best learning and effective for students. During the exam, strict guidelines are followed and exam date timetable adheres to it. Our examination process is fully automated and no manual intervention is required. Our software allows the proctored exam schedule where a series of exams can be taken. <br><br>Exam Creator Software enables local and official exam creation where, teachers, administrator or examiners can create exams based on school capacity and standard.<br><br>The exam management system is best suited for graduate programs. Our exams can be conducted individually or as a group of students like classes. The examination timetable is similar to any official or board examination.<br><br>In order to support our country during the COVID-19 pandemic, Innovation legend has implemented an online exam system to enable our student to do their university exam online. Our solution been tested and confirm its stability for more 11 thousand students.<br><br>",
    //our-work pages-iob ------>
    iob_page_p_1:"Invoicing software is a tool that automatically generates billing for rendered services and products. This tool creates a list of services and products along with their corresponding costs and sends them to your customers as an invoice. These invoices are commonly created using ready-made templates, mostly professional-looking ones, which makes the process easier and advantageous to businesses. Our solution features include:",
    iob_page_p_2:"Create and customize invoices.",
    iob_page_p_3:"Today’s online invoicing platforms are relatively easy to use than desktop software and are increasingly becoming the preferred choice for many. Not being tied down to an on-premise system allows you to easily access information from anywhere to create invoices and personalize them to carry your brand. Unlike the traditional way where you already have a printed invoice, using this tool allows you to build an invoice from scratch and then populate the line items with customer name, quantity, amount, discounts, sales tax, and others. You may also choose to use templates built into the software and simply fill in the fields. Most applications offer customizing options where you can modify invoice elements or include your logo and other corporate symbols. You can create new clients or import client’s name from a database and simply click send. You have options to transform estimates approved by clients into invoices and send them also, or you can notify them to get the invoice from an online portal. Sending recurring invoices to long-term clients can likewise be automated.",
    iob_page_p_4:"Facilitate billing and payment.",
    iob_page_p_5:"Online platforms do not require additional set up and can provide you with the capability to conveniently process payment. With invoicing software, you can create an online portal for customers to directly make payments and for you to immediately process them. It also allows you to accept foreign currency payments as billing and invoicing software has features to handle multiple currencies. With invoicing platforms, managing and processing payments had become easy tasks as you have the option to either integrate with PayPal or another online payment platform, or process credit card payments. Invoicing software usually has features to handle multiple languages, multiple currencies, and tax adjustments. There is also the functionality to track offline payments.",
    iob_page_p_6:"Generate reports.",
    iob_page_p_7:"You can produce a variety of reports with invoicing software which can assist you to track your finances and monitor which invoices are currently outstanding. You can automate reports generation, export them as PDF files, and share or receive them by email. You can have reports generated and data analyzed to get relevant insights from your billing and invoicing operations such as the number of outstanding invoices, average time for a payment cycle, how many clients pay on time, and how many of them pay late. You can quickly get important information through the software that also manages all your records, transactions and database.",
    iob_page_p_8:"BeCast is one of the most famous construction company in Baghdad and they are our customers for 3 years now. We have implemented to Becast a solution for invoicing which support different customers and invoice history.",
    //our-work pages-E-learn ------>
    e_learn_page_p_1:"E-learning, also referred to as online learning or electronic learning, is the acquisition of knowledge which takes place through electronic technologies and media. In simple language, e-learning is defined as “learning that is enabled electronically”. Typically, e-learning is conducted on the Internet, where students",
    e_learn_page_p_2:"can access their learning materials online at any place and time. E-Learning most often takes place in the form of online courses, online degrees, or online programs. ",
    e_learn_page_p_3:"In 2017, Microsoft introduced a set of educational products and services, inspired by teachers and students. The new tools work with Office 365 and include Microsoft Teams, Class Notebook, Office Apps, Education Apps and files built into every class.",
    e_learn_page_p_4:"By utilizing Microsoft education tools we have built a complete e-learning solution for universities. We provide a communication tools between the student and instructors, online storage and supporting tools for learning. The solution is customized to perform other task related student registration, courses system, Student records and other subsystem. The system is fully untreatable with other 3rd party solutions and can be used for example to generate student ID.",
    //our-work pages-sinna ------>
    sinna_page_p_1:" The mobile application technology is everywhere now and innovation legend is one of the company which take a lead in this domain by design and implement the Sina’a street application, Sina’a street application is an ecommerce application for IT devices and software. Innovation legend implemented this application using the native programming language and make it available for android and IOS. Sina’a street application include all the ecommerce tools required to perform a success online purchase task, and products shipping to the customers. Sinna street application is a multi-vendor ecommerce application and can handle multiple stores with their sales and stock management. ",
     //our-work pages-radio ------>
     radio_page_p_1:"Without any doubt, radio broadcasting has traveled a long way ahead of becoming almost a century older. As the technology digitally transformed, the radio stations first went on to go online and then with the advent and flourishing of mobile applications, it saw another important transition. They are available in the form of mobile apps; meaning you can tune to a radio station using its particular app.",
     radio_page_p_2:"Innovation legend implemented a project for radio one fm to implement a mobile application for their radio. The mobile application enables the audience of radio one fm follow the recent live stream video and recent updates and programs.",
     radio_page_p_3:"The radio app also provides the benefit of on-demand content such as listening to live streaming music or renowned DJs on the floor. The app also provides the option of streaming podcasts that have gained popularity in the recent times. According to an estimate, about 57% of the Americans said that they prefer listening to podcasts on the monthly basis.",
    //our-work pages-gpm ------>
    gpm_page_p_1:"Dedicated ecommerce application for PC, PC parts and laptops. GPM application enable the buyers to find a variety of choices to buy a laptop with special specifications, Desktop for design or gaming, or if they want to upgrade their desktop to a higher specification. GPM provide all the features required to perform a successful online purchase and delivery with different payment methods",
    //our-work pages-frahide ------>
    farahedi_page_p_1:"Innovation legend provided a mobile application for al farahidi student to follow up with their lectures and different announcement that university would like to spread. Through the mobile application the student can find also their exam result as well as their attendance status for each course.",
    
    //contact section
    Say_Hi:"Say Hi",
    send:"Send",
    // join
    project:"Do You Have A project",
    Lets_talk_About:"Lets talk About Business Solution With Us",
    //footer word
    If_you_want:"If you want to work with us, need more details about a job, or get a CV, you should contact us via",
    Quick_Links:"Quick Links",
};

var AR = {
    //navbar trans
    position:"بغداد شارع الصناعة - عمارة الفيصل - مكتب 17",
    Home:"الصفحة الرئيسية",
    services:"الخدمات",
    All:"الـكـل",
    Backup:"حل احتياطي",
    Database:"خدمات قواعد البيانات",
    CCTV:"نظمام المراقبة بالكامرات",
    Data_Center:"تصميم مراكز البيانات",
    Harfware:"تجهيز القطع والبرامجيات",
    IT_support:"خدمات الدعم الفني",
    IPTV:"خدمة القنوات الشبكية",
    Mobile_Application:"تطوير التطبيقات",
    Our_Work:"اعمالنا",
    English:"English",
    // header trans
    About_us:"من نحن",
    Contact:"تواصل معنا",
    PerfectIT:"حلول تكنولوجيا المعلومات المثالية لعملك",
    We_are_well:"نحن على دراية جيدة بمجموعة متنوعة من أنظمة التشغيل والشبكات وقواعد البيانات. نحن نستخدم هذه الخبرة لمساعدة عملائنا من خلال تقديم خدمات مناسبة للغرض وتكلفة فعالة مما يوفر وقتك وميزانيتك.",
    Read_More:"أقراء المزيد",
    See_Our_Work:"أطلع على اعمالنا",
    //about-us trans
    More_than:"أكثر من 3 سنوات ونحن نقدم حلول <span data-content= 'Solutions'>تكنولوجيا المعلومات</span>",
    solutions:"تكنولوجيا المعلومات",
    Successful:"تتمتع المنظمات الناجحة بإمكانية الوصول إلى جميع بائعي البرامج الرئيسيين ، واختيار البرنامج المناسب بالسعر المناسب ، وتمكينهم من أن يصبحوا أكثر فعالية من حيث التكلفة وأن يتحركوا مع الاتجاهات المستقبلية. ستكون Innovation Legend معك خلال رحلة النجاح وستقدم لك أحدث التقنيات وتدعمك بخدمات طويلة الأجل.",
    In_Innovation:"في أسطورة الابداع ، نؤمن بعلاقة طويلة الأمد مع عملائنا والخطوة الأولى نحو بناء هذه العلاقة هي اكتساب الثقة من خلال توفير حل لكل تحدٍ. هذه هي روحنا وعزمنا على أن نصبح شريكًا تجاريًا وليس مقدم حلول فقط.",
    //our-services
    We_Provide:"نحن نقدم خدمات حصرية لعملك",
    Mobile_Application_i:"حقيقة أن الأشخاص في هذه الأيام يقضون وقتًا أطول على الهاتف أكثر من أجهزة الكمبيوتر أمر رائع للشركات - إذا قمت بتعديل خطة التسويق الخاصة بك لتتوافق مع هذا التحول ، فمن الواضح أن عملك سيتعرض للعديد من مقل العيون إذا كان لديك تواجد متنقل",
    Database_i:"دعونا نخرج التعقيد من إدارة قواعد البيانات. يوفر مسؤولو قواعد البيانات المعتمدون لدينا الخبرة العميقة التي تحتاجها لإدارة MySQL® و Oracle® و Microsoft® SQL Server® وتحسين أدائهم. سواء كنت تعمل على أجهزة مخصصة أو على أحد خوادمنا السحابية",
    Backup_i:"حماية نفسك من الضياع لا تتعلق بالحصول على نسخة احتياطية بقدر ما هي قدرتك على استعادة المعلومات والعناصر. إن وجود نظام نسخ احتياطي في مكانه شيء ، ومعرفة أن النسخ الاحتياطي لن يفشل وأنك ستتمكن دائمًا من استرداد المعلومات القيمة.",
    Harfware_i:"يعد اختيار معدات تكنولوجيا المعلومات المناسبة اعتبارًا مهمًا لعملك. الكمبيوتر هو القلم والورق في العصر الحديث ، ومن المؤكد أن موظفيك يتمتعون بجودة المعدات التي يعملون عليها. ستدعمك الأجهزة الموثوقة التي يمكنها تحمل اختبار الزمن ، جنبًا إلى جنب مع البرنامج الصحيح ، بأمانة يومًا بعد يوم.",
    IT_support_i:"ضع دعم تكنولوجيا المعلومات الخاص بك بين أيدينا بالكامل. برنامج الإدارة الخاص بنا هو نهج استثماري ثابت لإيجاد ومنع مشاكل الكمبيوتر بشكل استباقي على أساس يومي قبل وقوع الكوارث. في حالة تعطل شيء ما ، فإن وقت الاستجابة السريع المضمون هو مجرد واحدة من الفوائد العديدة لوجود برنامج دعم لتكنولوجيا المعلومات مُدار باستخدام الحوسبة المفصلة.",
    Data_Center_i:"تقوم أسطورة الابداع أيضًا بتثبيت الأنظمة الكهربائية وكابلات الاتصالات لجعل عملك يزدهر. نحن ندير جميع جوانب اختيار الموقع والتصميم والبناء والتكليف والصيانة لمراكز البيانات المهمة الخاصة بك. ",
    CCTV_i:"نظام أمان واحد وهو كاميرات CCTV يلبي جميع متطلباتك ويحميك بكل الطرق سواء كنت تستخدمه للمكتب أو للمنزل. يتمتع نظام الأمان هذا بوظائف خاصة ومختلفة تفصله عن جميع أنظمة الأمان. تأتي كاميرات CCTV بعدة أوضاع مثل التسجيل فقط والتسجيل بتأثيرات صوتية وكاميرات CCTV المخفية وما إلى ذلك.",
    IPTV_i:"يعد Internet Protocol Television أو IPTV مفهومًا سريع الظهور اكتسب شعبية كبيرة في السنوات الأخيرة. توفر الميزات المختلفة لـ IPTV عددًا من الفوائد وتعزز تجربة مشاهدة التلفزيون. يوفر للمستخدمين حرية عرض المحتوى الذي يختارونه. كما أنه يوفر المرونة من خلال السماح لهم بمشاهدة البرامج في الوقت المناسب لهم.",
    see_more:"رؤية الـمـزيد",
    //our-services pages------>
    //our-services pages Mobile Applications ------>
    Mobile_Applications_page_t:"ما هو تطبيق الجوال؟",
    Mobile_Applications_page_cont:"تطبيقات الهاتف المحمول هي تطبيقات إنترنت مصممة للتشغيل على الهواتف الذكية والأجهزة المحمولة الأخرى. وفقًا لموقع webopedia.com ، تساعد تطبيقات الأجهزة المحمولة المستخدمين من خلال توصيلهم بخدمات الإنترنت التي يتم الوصول إليها بشكل أكثر شيوعًا على أجهزة الكمبيوتر المكتبية أو المحمولة. شكل من أشكال التسويق ينمو بسرعة مع عدم وجود علامات على التباطؤ. حاليًا 77٪ من سكان العالم متصلون بالإنترنت. مع التبني السريع للهواتف الذكية والأجهزة اللوحية ، تواجه الشركات المزيد والمزيد من الفرص كل يوم من شأنها أن تغير بشكل جذري كيفية تقديم خدماتهم أو منتجاتهم والوصول إليها. هناك أجهزة محمولة في العالم أكثر من العدد الإجمالي لأجهزة الكمبيوتر ووحدات التلفزيون مجتمعة ، مما يعني أن عملك يحتاج إلى وجود محمول للبقاء على اتصال مع عملائه. يتم أحيانًا تصنيف تطبيقات الجوال وفقًا لما إذا كانت تطبيقات تستند إلى الويب أو تطبيقات أصلية ، تم إنشاؤها خصيصًا لمنصة معينة. فئة ثالثة ، التطبيقات المختلطة ، تجمع بين عناصر التطبيقات المحلية وتطبيقات الويب. مع نضوج التقنيات ، من المتوقع أن تركز جهود تطوير تطبيقات الهاتف المحمول على إنشاء تطبيقات ويب قائمة على المتصفح ولا تعتمد على الأجهزة ، إذا كانت تطبيقات الهاتف ، في رأيك ، مخصصة حصريًا للشركات العالمية والعلامات التجارية الشهيرة مثل Bank of America أو وول مارت ، أنت مخطئ تمامًا. في الوقت الحاضر ، تتبع المزيد والمزيد من الشركات متوسطة الحجم ، وحتى الصغيرة ، اتجاهات تطوير تطبيقات الأجهزة المحمولة. تجعل ظروف السوق الشركات تعتقد أن استراتيجية الهاتف المحمول الفعالة تتطلب أكثر من مجرد موقع ويب سهل الاستخدام.",
    
     //our-services pages-database Services ------>
    Let_us_take:"دعونا نخرج التعقيد من إدارة قواعد البيانات. يوفر مسؤولو قواعد البيانات المعتمدون لدينا الخبرة العميقة التي تحتاجها لإدارة MySQL® و Oracle® و Microsoft® SQL Server® وتحسين أدائهم. سواء كنت تعمل على أجهزة مخصصة أو على أحد خوادمنا السحابية ، فإن خبرائنا متواجدون هنا للمساعدة في إرشادات تصميم الهندسة والإدارة والمراقبة واستكشاف الأخطاء وإصلاحها",
    Database_page_p_2:"منصات قواعد البيانات",
    Database_page_p_3:"يتضمن دعم MySQL لعملاء Innovation Legend ما يلي:",
    Database_page_li_Install:"التركيب",
    Database_page_li_2:"المساعدة في التكوين",
    Database_page_li_3:"المساعدة الأساسية في استكشاف الأخطاء وإصلاحها",
    Database_page_li_4:"عامل نسخ احتياطي لقاعدة البيانات اختياري",
    Database_page_li_5:"مشورة الخبراء والاستشارات",
    Database_page_p_4:"مشاريع MySQL المتقدمة:",
    Database_page_li_6:"تكوين نسخ MySQL أو خيارات التثبيت المتقدمة",
    Database_page_li_7:"تحليل أداء MySQL Server وتحسينه",
    Database_page_li_8:"التقييم الأولي الشامل للبيئة (تحليل خادم قاعدة البيانات الكامل ، بما في ذلك MySQL ونظام التشغيل)",
    Database_page_li_9:"أداء MySQL Server واستخدام الموارد",
    Database_page_li_10:"تحليل الاستعلامات البطيئة",
    Database_page_li_11:"تحسين الاستعلام والفهرسة المناسبة",
    Database_page_p_5:"استفد من خبرتنا العميقة في إدارة ودعم MS SQL حيث نقدم:",
    Database_page_li_12:"المراقبة لضمان بقاء جميع الخدمات الهامة متاحة",
    Database_page_li_13:"إدارة وصول الأمان ، بما في ذلك كلمات المرور والمخططات",
    Database_page_li_14:"الصيانة والضبط الاستباقي للمستخدم النهائي والوصول إلى التطبيق",
    Database_page_li_15:"ترقيات إصدار النقاط والتصحيح المطلوب مسبقًا حسب الحاجة",
    Database_page_p_6:"Oracle Support for Innovation Legend Customers:",
    Database_page_li_17:"ترخيص شهري مريح",
    Database_page_li_18:"ترتيب",
    Database_page_li_19:"التقييم البيئي الأولي وتعديلات الأداء",
    Database_page_li_20:"مراقبة بيئة قواعد البيانات وجمع الإحصاءات",
    Database_page_li_21:"تصعيد الطوارئ لكبار DBA 24x7x365",
    Database_page_li_22:"استكشاف الأخطاء وإصلاحها",
    Database_page_li_23:"استشارة DBA لتحسين الأداء",
    Database_page_li_24:"وكيل النسخ الاحتياطي لقاعدة البيانات الحية الاختياري",
    
    //our-services pages-backup Services ------>
    backup_page_p_1:"وكيل النسخ الاحتياطي لقاعدة البيانات الحية الاختياري",
    backup_page_li_1:"(أ) فقدان ملف ،",
    backup_page_li_2:"(ب) فقدان نظام الكمبيوتر بأكمله ، ",
    backup_page_li_3:"(ج) فقدان موقع أو مكتب بأكمله.",
    backup_page_p_2:"حماية نفسك من الضياع لا تتعلق بالحصول على نسخة احتياطية بقدر ما هي قدرتك على استعادة المعلومات والعناصر. إن وجود نظام نسخ احتياطي في مكانه شيء ، ومعرفة أن النسخ الاحتياطي لن يفشل وأنك ستتمكن دائمًا من استرداد المعلومات القيمة ، بغض النظر عما يحدث ، شيء آخر.",
    
    //our-services pages-backup Services ------>
    Harfware_page_p_1:"يعد اختيار معدات تكنولوجيا المعلومات المناسبة اعتبارًا مهمًا لعملك. الكمبيوتر هو القلم والورق في العصر الحديث ، ومن المؤكد أن موظفيك يتمتعون بجودة المعدات التي يعملون عليها. ستدعمك الأجهزة الموثوقة التي يمكنها تحمل اختبار الزمن ، جنبًا إلى جنب مع البرنامج الصحيح ، بأمانة يومًا بعد يوم.",
    Harfware_page_p_2:"إن اتخاذ قرار شراء سيئ باستخدام جهاز الكمبيوتر الخاص بك يمكن أن يكون له تداعيات مكلفة. إذا كنت تبحث عن حلول رخيصة ، فلا تتوقع أداءً عاليًا ، وأجهزة تدوم طويلاً ستستمر في مكافأتك.",
    Harfware_page_p_3:"مرة أخرى ، إذا كنت تفكر في شراء برامج وترخيص مناسبين لنشاطك التجاري ، فهذه مهمة يجب القيام بها بشكل جيد. تعتبر متطلبات كل شركة فريدة ، سواء كنت بحاجة إلى برنامج موارد بشرية شامل أو تثبيت Microsoft Office على مائتي جهاز كمبيوتر. ستساعدك الأدوات المناسبة على زيادة تأثيرك وكفاءتك.",
    Harfware_page_p_4:"يختار قادة الأعمال Innovation Legend لتزويد وتثبيت أجهزتهم وبرامجهم لأنهم يثقون بخبرتنا في اختيار المنتجات المناسبة لتلبية احتياجاتهم. نحن نعمل مع موزعين معتمدين وذوي مصداقية للحصول على أفضل المعدات فقط. قد لا يكون دائمًا الخيار الأرخص ، لكن عملائنا يعتقدون حقًا أن السعر ليس بديلاً عن القيمة والتحقق من المستقبل.",
    
    //our-services pages-It suppore Services ------>
    IT_support_page_p_1:"في عالم اليوم ، هناك عدد قليل من الشركات التي لا تعتبر أنظمة الكمبيوتر ضرورية لها. لقد غيرت التكنولوجيا بشكل أساسي الطريقة التي نؤدي بها أعمالنا يوميًا ، من أجهزة الكمبيوتر التي يعمل عليها موظفوك إلى الخوادم التي تخزن بياناتك.",
    IT_support_page_p_2:"يعد الحفاظ على عمل هذه الأنظمة بشكل فعال ودون انقطاع مكلف أمرًا ضروريًا لنجاح مؤسستك. عندما يتعلق الأمر بحماية عملك ، يجب عليك اختيار الأفضل فقط. أنت بحاجة إلى دعم خبير ، لذلك إذا حدث شيء فلن يتركك عرضة للخطر ويمكنك الوقوف على قدميك بسرعة.",
    IT_support_page_p_3:"يمكن تقسيم دعم تكنولوجيا المعلومات لدينا إلى ثلاثة مناهج أساسية",
    IT_support_page_p_4:"برامج دعم تكنولوجيا المعلومات المدارة:",
    IT_support_page_p_5:"ضع دعم تكنولوجيا المعلومات الخاص بك بين أيدينا بالكامل. برنامج الإدارة الخاص بنا هو نهج استثماري ثابت لإيجاد ومنع مشاكل الكمبيوتر بشكل استباقي على أساس يومي قبل وقوع الكوارث. في حالة تعطل شيء ما ، فإن وقت الاستجابة السريع المضمون هو مجرد واحدة من الفوائد العديدة لوجود برنامج دعم لتكنولوجيا المعلومات مُدار باستخدام الحوسبة المفصلة.",
    IT_support_page_p_6:"الصيانة الوقائية:",
    IT_support_page_p_7:"خدمة روتينية لأنظمة الكمبيوتر لديك تقلل بشكل كبير من احتمالية حدوث شيء ما بشكل غير متوقع. يمكن لهذه الخدمة إطالة عمر أنظمتك بنسبة تصل إلى عشرين بالمائة.",
    IT_support_page_p_8:"دعم تجاوز:",
    IT_support_page_p_9:"خدمة مفيدة لفرق أو أقسام تكنولوجيا المعلومات المنشأة داخل الشركات. سواء كانت يد المساعدة المطلوبة خلال الفترات المزدحمة أو العطلات أو بعض المعرفة المتخصصة للإعدادات والبيئات الأكثر تعقيدًا ، فسوف يتكامل خبراؤنا مع موظفيك لتوفير تلك الخبرة الإضافية عند الضرورة",
    
    //our-services pages-Data Center Services ------>
    Data_Center_page_p_1:"توفر Innovation Legend خدمات تصميم / بناء مركز البيانات للمرافق الحيوية للمهام. تقوم Innovation Legend أيضًا بتثبيت الأنظمة الكهربائية وكابلات الاتصالات لجعل عملك يزدهر. نحن ندير جميع جوانب اختيار الموقع والتصميم والبناء والتكليف والصيانة لمراكز البيانات المهمة الخاصة بك.",
    Data_Center_page_p_2:"من خلال تقييم دقيق لمركز البيانات ، يمكننا تحديد التصميم الأمثل للمرفق الحرج للمهمة وبنائه لتلبية احتياجاتك. إذا كنت تقوم بخطوة ما ، فسيقوم مهندسو مركز البيانات لدينا بتفكيك البنية التحتية الحالية الخاصة بك والمساعدة في تصميم غرفة كمبيوتر جديدة للموقع الجديد. بصفتنا مقاولًا عامًا ، فإننا نتعامل أيضًا مع دمج مركز البيانات. إذا كانت بنيتك التحتية الحالية تعتمد على تصميم حرج للمهمة ، يمكن لفرق البناء لدينا دمج البنية التحتية الخاصة بك بشكل فعال في بناء مركز بيانات واحد فعال واقتصادي.",
    Data_Center_page_p_3:"يتغير عالم مركز البيانات بسرعة. دع متخصصي مركز البيانات لدينا يساعدونك اليوم. تقدم Innovation Legend حلولاً تتميز بالكفاءة في استخدام الطاقة وتوفر الموثوقية التي تطلبها وقابلة للتطوير والوحدات النمطية. يمكننا التعامل مع جميع احتياجات البنية التحتية لتكنولوجيا المعلومات الخاصة بك من تصميم غرفة الكمبيوتر إلى الأنظمة الكهربائية لمركز البيانات وتركيبات UPS والأنظمة الميكانيكية والصيانة الوقائية. اتصل بنا اليوم للحصول على حل المرافق الحيوية للمهمة الجاهزة. أسطورة الابتكار نحن نبني مراكز البيانات",
    
    //our-services pages-CCTV Services ------>
    CCTV_page_p_1:"في الوقت الحاضر تتزايد الجريمة بشكل سريع. بسبب هذا العالم كله في حالة ذعر. الحل الوحيد للتخلص من هذه المشكلة هو إنشاء نظام أمان حولك ومنزلك.",
    CCTV_page_p_2:"هناك الكثير من أنواع أنظمة الأمان المتوفرة في السوق. كل نظام أمان له ميزات خاصة ووظائف مختلفة تناسب متطلباتك. تعتمد الحاجة إلى نظام الأمان على طريقة العمل كما تريد تجاريًا أو تحتاج إلى الأمان لمنزلك.",
    CCTV_page_p_3:"نظام أمان واحد وهو كاميرات CCTV يلبي جميع متطلباتك ويحميك بكل الطرق سواء كنت تستخدمه للمكتب أو للمنزل. يتمتع نظام الأمان هذا بوظائف خاصة ومختلفة تفصله عن جميع أنظمة الأمان. تأتي كاميرات CCTV بعدة أوضاع مثل التسجيل فقط والتسجيل بتأثيرات صوتية وكاميرات CCTV المخفية وما إلى ذلك.",
    
    //our-services pages-IPTV Services ------>
    IPTV_page_p_1:"يعد Internet Protocol Television أو IPTV مفهومًا سريع الظهور اكتسب شعبية كبيرة في السنوات الأخيرة. توفر الميزات المختلفة لـ IPTV عددًا من الفوائد وتعزز تجربة مشاهدة التلفزيون. يوفر للمستخدمين حرية عرض المحتوى الذي يختارونه. كما أنه يوفر المرونة من خلال السماح لهم بمشاهدة البرامج في الوقت المناسب لهم.",
    IPTV_page_p_2:"يمكن استخدام IPTV بشكل فعال لعرض التلفزيون العادي والنوافذ البعيدة والإعلانات والخدمات الخاصة و VoD والعديد من الأشياء الأخرى. لمشاهدة التلفزيون العادي ، قد يتم الاشتراك في قائمة قنوات IPTV. يمكن استخدام قائمة القنوات لتحديد القنوات المفضلة.",
    IPTV_page_p_3:"من منظور الإعلان ، يساعد IPTV المعلنين على بناء إعلاناتهم وحملاتهم على المعلومات الديموغرافية التفصيلية المتاحة. يمكن للقنوات التي يشترك فيها مستخدمو IPTV تزويد المعلنين بالمعلومات ذات الصلة حول نمط الحياة واختيار العملاء. على أساس هذه المعلومات ، يمكنهم تحديد جمهورهم المستهدف وتصميم الإعلانات وفقًا لذلك.",


    //our_work_section
    The_Latest_Work:"أخر أعمالنا",
    POS:"POS",
    POS_i:"قامت شركة أسطورة الابداع بتنفيذ مشروع بناء نظام مبيعات متكامل حسب متطلبات شركة كلارا. يتميز نظامنا للمبيعات بتوفير مجموعة واسعة من الوظائف لادارة الزبائن والمجهزين بالاضافة الى توفير مجموعة من التقارير الحاصة بالمبيعات وادارة المخزون",
    R_M_S:"Restaurant management system",
    R_M_S_i:"نظامنا لادارة المبيعات يوفر مجموعة واسعة من الخصائثص التي تجعل ادارة المبيعات سهلة ومنتجة. ",
    O_E_S:"Online exam system",
    O_E_S_i:"حرصنا منا على دعم بلدنا خلال جائحة كورونا قامت شركتنا ببناء نظام امتحان الكتروني يمكن طلابنا من اداء امتحاناتهم اونلاين. تمت تجربة نظامنا والتاكد من استقراريته مع اكثر من احد عشر الف طالب",
    I_S_B:"Invoice system for Becast",
    I_S_B_i:"شركة بيكاست احد اشهر شركات البناء في بغداد وهي احدى زبائننا لثلاثة سنوات. قمنا مؤخراً ببناء نظام فواتير لشركة بيكاست والذي يدعم اكثر من زبون",
    E_Learn: "E-learning system",
    E_Learn_i: "من خلال استخدام أدوات Microsoft التعليمية ، قمنا ببناء حل كامل للتعلم الإلكتروني للجامعات. نحن نقدم أدوات اتصال بين الطالب والمعلمين ، والتخزين عبر الإنترنت وأدوات الدعم للتعلم. تم تخصيص الحل لأداء المهام الأخرى المتعلقة بتسجيل الطلاب ونظام الدورات وسجلات الطلاب والأنظمة الفرعية الأخرى.",
    Sinna: "Sinna street app",
    Sinna_i: "تطبيق شارع Sinna إن تكنولوجيا تطبيقات الهاتف المحمول موجودة في كل مكان الآن وأسطورة الابتكار هي واحدة من الشركات التي تتصدر هذا المجال من خلال تصميم وتنفيذ تطبيق شارع سيناء ، تطبيق شارع سيناء هو تطبيق للتجارة الإلكترونية لأجهزة وبرامج تكنولوجيا المعلومات",
    radio: "Radio one FM application",
    radio_i: "نفذت شركة أسطورة الابداع مشروعًا لراديو واحد أف أم لتنفيذ تطبيق للهاتف المحمول للراديو الخاص بهم. يتيح تطبيق الهاتف المحمول لجمهور الراديو متابعة بث مباشر للفيديو وآخر التحديثات والبرامج",
    GPM: "GPM",
    GPM_i: "تطبيق متجر الكتروني لحاسبات المكتبية والمحمولة وكذلك للقطع غيار الحاسبات. يساعد هذا التطبيق الراغبين بشراء حاسبة محمولة بمواصفات معينة او حاسبة مكتبية تستعمل في التصاميم والالعاب وكذلك الراغبين بتطوير حاسباتهم في ايجاد مكان مخصص لكل هذه المتطلبات. يوفر التطبيق كافة الوسائل المطلوبة لاجراء عملية شراء اونلاين ناجحة مع طرق دفع مختلفة",
    farahedi: "Al farahedi application",
    farahedi_i: "قامت شركتنا بتوفير تطبيق موبايل لطلية جامعة الفراهيدي يتيح لهم تتبع اخر الاعلانات التي تقدمها الجامعة بالاضافة الى المحاضرات وقوائم الحضور لكل محاضرة. باستخدام التطبيق يتمكن الطالب من الاطلاع على درجات امتحانه والاقساط المالية المتبقية عليه.",
    //our-work pages-POS ------>
    pos_page_p_1:"برامج نقاط البيع هي عبارة عن نظام يتم نصبه في المحال والمراكز التجارية ومن خلاله تتم عملية البيع للمنتجات المتوفرة. نظام نقاط البيع يتكون من الأجهزة والبرامج التي تستعمل لإصدار قوائم الشراء والفواتير. يقوم نظامنا بإصدار فاتورة متكاملة تتضمن قائمة المنتجات والسعر وتفاصيل المنتج. كذلك نوفر أجهزة لمسح الباركود للمنتجات وطابعة لطبع الفاتورة. <br><br> قامت شركة أسطورة الابداع بتنفيذ مشروع بناء نظام مبيعات متكامل حسب متطلبات شركة كلارا. يتميز نظامنا للمبيعات بتوفير مجموعة واسعة من الوظائف لادارة الزبائن والمجهزين بالاضافة الى توفير مجموعة من التقارير الحاصة بالمبيعات وادارة المخزون",
    //our-work pages-RMS ------>
    rms_page_p_1:"نظام إدارة المطاعم هو مصطلح جماعي للبرامج التي تساعد على تبسيط عمليات الأعمال الغذائية. وهي المطاعم والحانات والمخابز والمقاهي وشاحنات الطعام أو شركات التوصيل. فهو يجمع بين جميع الأشياء الجيدة المتعلقة بأنظمة نقاط البيع التقليدية، مع الأدوات التي تدير مكالماتك الهاتفية، وتلقي حجوزات الجدول، وتبسيط إدارة المخزون، والتعامل مع الفواتير، وتوفير تحليلات قابلة للتنفيذ، وكذلك المساعدة في الأنشطة التسويقية مثل CRM وبرامج الولاء وبناء التواجد على الإنترنت. كما أنه يعمل بسلاسة مع أنظمة تكنولوجيا المطاعم الموجودة لديك (برنامج المحاسبة وإدارة الموظفين) ويستخدم واجهات برمجة التطبيقات المفتوحة التي تتيح لك التكامل مع أي أداة تابعة لجهة خارجية",
    //our-work pages-OES ------>
    oes_page_p_1:"حرصنا منا على دعم بلدنا خلال جائحة كورونا قامت شركتنا ببناء نظام امتحان الكتروني يمكن طلابنا من اداء امتحاناتهم اونلاين. تمت تجربة نظامنا والتأكد من استقراريته مع أكثر من أحد عشر الف طالب <br><br> تم تصميم نظام الامتحانات للمدارس والكليات والجامعات والمعاهد وأماكن إنشاء التعليم ووكالات التوظيف لتقديم الاختبارات ونشر النتائج للطلاب. يستخدم نظام الامتحانات لإعداد الامتحانات وممارسة الاختبارات يمكن للمرء أن يفكر في أنه يمكن أيضًا استخدام نظام الاختبار في اختبارات التحضيرية. توفر الاختبارات التحضيرية عبر الإنترنت أفضل تعليم وفعالية للطلاب. أثناء الاختبار، يتم اتباع إرشادات صارمة ويلتزم بها الجدول الزمني لتاريخ الاختبار. عملية الفحص لدينا مؤتمتة بالكامل ولا يتطلب أي تدخل يدوي. يسمح برنامجنا بجدول الاختبارات المراقب حيث يمكن إجراء سلسلة من الاختبارات.",
    //our-work pages-iob ------>
    iob_page_p_1:"برنامج الفواتير هو أداة تقوم تلقائيًا بإنشاء الفواتير للخدمات والمنتجات المقدمة. تنشئ هذه الأداة قائمة بالخدمات والمنتجات جنبًا إلى جنب مع التكاليف المقابلة لها وترسلها إلى عملائك كفاتورة. يتم إنشاء هذه الفواتير عادةً باستخدام قوالب جاهزة، معظمها ذات مظهر احترافي، مما يجعل العملية أسهل ومفيدة للشركات. تشمل ميزات الحل لدينا:",
    iob_page_p_2:"إنشاء وتخصيص الفواتير.",
    iob_page_p_3:"تعد منصات تحرير الفواتير عبر الإنترنت اليوم سهلة الاستخدام نسبيًا مقارنة ببرامج سطح المكتب وأصبحت بشكل متزايد الخيار المفضل للكثيرين. يتيح لك عدم تقييدك بنظام محلي الوصول بسهولة إلى المعلومات من أي مكان لإنشاء الفواتير وتخصيصها لحمل علامتك التجارية. على عكس الطريقة التقليدية حيث يكون لديك بالفعل فاتورة مطبوعة، يتيح لك استخدام هذه الأداة إنشاء فاتورة من البداية ثم ملء بنود السطر باسم العميل والكمية والمبلغ والخصومات وضريبة المبيعات وغيرها. يمكنك أيضًا اختيار استخدام القوالب المضمنة في البرنامج وملء الحقول ببساطة. تقدم معظم التطبيقات خيارات تخصيص حيث يمكنك تعديل عناصر الفاتورة أو تضمين شعارك ورموز الشركة الأخرى. يمكنك إنشاء عملاء جدد أو استيراد اسم العميل من قاعدة بيانات والنقر ببساطة فوق إرسال. لديك خيارات لتحويل التقديرات المعتمدة من قبل العملاء إلى فواتير وإرسالها أيضًا، أو يمكنك إخطارهم للحصول على الفاتورة من بوابة إلكترونية. يمكن أيضًا إرسال الفواتير المتكررة إلى العملاء على المدى الطويل تلقائيًا.",
    iob_page_p_4:"تسهيل الفواتير والدفع",
    iob_page_p_5:"لا تتطلب الأنظمة الأساسية عبر الإنترنت إعدادًا إضافيًا ويمكن أن توفر لك القدرة على معالجة الدفع بسهولة. باستخدام برنامج الفواتير، يمكنك إنشاء بوابة عبر الإنترنت للعملاء لإجراء عمليات الدفع مباشرة ولكي تقوم بمعالجتها على الفور. كما يسمح لك بقبول المدفوعات بالعملات الأجنبية لأن برنامج الفوترة والفواتير به ميزات للتعامل مع العملات المتعددة. مع منصات الفوترة، أصبحت إدارة المدفوعات ومعالجتها مهامًا سهلة حيث يمكنك إما الاندماج مع PayPal أو منصة دفع أخرى عبر الإنترنت، أو معالجة مدفوعات بطاقات الائتمان. عادةً ما تحتوي برامج الفواتير على ميزات للتعامل مع لغات متعددة وعملات متعددة وتعديلات الضرائب. هناك أيضًا وظيفة لتتبع المدفوعات في وضع عدم الاتصال.",
    iob_page_p_6:"إنشاء التقارير.",
    iob_page_p_7:"يمكنك إنتاج مجموعة متنوعة من التقارير باستخدام برنامج الفواتير الذي يمكن أن يساعدك على تتبع أموالك ومراقبة الفواتير المعلقة حاليًا. يمكنك أتمتة إنشاء التقارير وتصديرها كملفات PDF ومشاركتها أو استلامها عبر البريد الإلكتروني. يمكنك إنشاء تقارير وتحليل البيانات للحصول على رؤى ذات صلة من عمليات الفوترة والفواتير مثل عدد الفواتير المستحقة، ومتوسط الوقت لدورة الدفع ، وعدد العملاء الذين يدفعون في الوقت المحدد ، وكم منهم يدفعون متأخرًا. يمكنك الحصول بسرعة على معلومات مهمة من خلال البرنامج الذي يدير أيضًا جميع سجلاتك ومعاملاتك وقاعدة بياناتك.",
    iob_page_p_8:"شركة بيكاست احد اشهر شركات البناء في بغداد وهي احدى زبائننا لثلاثة سنوات. قمنا مؤخراً ببناء نظام فواتير لشركة بيكاست والذي يدعم اكثر من زبون",
    //our-work pages-E-learn ------>
    e_learn_page_p_1:"التعلم الإلكتروني، الذي يشار إليه أيضًا بالتعلم عبر الإنترنت أو التعلم الإلكتروني، هو اكتساب المعرفة الذي يتم من خلال التقنيات والوسائط الإلكترونية. في لغة بسيطة، يتم تعريف التعلم الإلكتروني على أنه التعلم الذي يتم تمكينه إلكترونيًا",
    e_learn_page_p_2:"عادةً ما يتم إجراء التعلم الإلكتروني على الإنترنت، حيث يمكن للطلاب الوصول إلى مواد التعلم الخاصة بهم عبر الإنترنت في أي مكان وزمان. غالبًا ما يتم التعلم الإلكتروني في شكل دورات عبر الإنترنت أو شهادات عبر الإنترنت أو برامج عبر الإنترنت. ",
    e_learn_page_p_3:"في عام 2017، قدمت Microsoft مجموعة من المنتجات والخدمات التعليمية المستوحاة من المعلمين والطلاب. تعمل الأدوات الجديدة مع Office 365 وتتضمن Microsoft Teams وClass Notebook وOffice Apps وEducation Apps والملفات المضمنة في كل فصل.",
    e_learn_page_p_4:"بالتعاون مع شركة مايكروسوفت قمنا ببناء نظام تعليم الكتروني متكامل للجامعات والمعاهد التعليمي. حيث يوفرنظامنا للتعليم ادوات تواصل بين الطالب والاستاذ ووحدات خزن اونلاين وادوات اخرى داعمة للتعليم.يتميز نظامنا بكونه مصممة حسب حاجة الجامعات ليقوم بتوفير ادوات الادارة الجامعية مثل نظام تسجيل الطلبة ونظام المقررات وغيرها.كذلك نظامنا للتعليم متوافق مع الانظمة الاخرى التي قد تكون مستعملة في الجامعات ويمكن استخدامه لتسهيل عملية اصدار الهويات حيث يقوم النظام باصدار رقم تعريفي خاص لكل طالب.",
    //our-work pages-sinna ------>
    sinna_page_p_1:" تطبيقات الموبايل أصبحت في كل مكان وشركة اسطورة الابداع هي احد الشركات الرائدة في هذا المجال حيث قمنا ببناء تطبيق شارع الصناعة. تطبيق شارع الصناعة هو تطبيق متجر الكتروني لمنتجات الاجهزة المعلوماتية والبرامجية. تمت برمجة تطبيق شارع الصناعة ليكون متاحا لاصحاب هواتف التي تعمل بنظام أندرويد واجهزة شركة أبل. يوفر تطبيق شارع الصناعة كافة الادوات التي تضمن القيام بعملية شراء اونلاين ناجحة وكذلك توصيل البضائع الى الزبون حسب موقعه الجغرافي. تطبيق شارع الصناعة مصمم ليكون متعدد المتاجر مما يتيح لاكثر من متجر الكتروني استخدامه ويقوم التطبيق يادارة مبيعاتهم ومخزونهم من المنتجات.",
    //our-work pages-radio ------>
    radio_page_p_1:"بدون أدنى شك، قطع البث الإذاعي شوطًا طويلاً قبل أن يصبح أكبر من قرن من الزمان تقريبًا. مع تحول التكنولوجيا رقميًا، انتقلت محطات الراديو أولاً إلى الإنترنت ثم مع ظهور وازدهار تطبيقات الهاتف المحمول، شهدت تحولًا مهمًا آخر. كانت متوفرة في شكل تطبيقات المحمول؛ مما يعني أنه يمكنك ضبط محطة راديو باستخدام التطبيق الخاص بها.",
    radio_page_p_2:"نفذت شركة Innovation Legion مشروعًا لراديو واحد أف أم لتنفيذ تطبيق للهاتف المحمول للراديو الخاص بهم. يتيح تطبيق الهاتف المحمول لجمهور الراديو متابعة بث مباشر للفيديو وآخر التحديثات والبرامج. <br><br> يوفر تطبيق الراديو أيضًا ميزة المحتوى حسب الطلب مثل الاستماع إلى موسيقى البث المباشر أو دي جي المشهورين على الأرض. يوفر التطبيق أيضًا خيار دفق البودكاست الذي اكتسب شعبية في الآونة الأخيرة. وفقًا لتقدير، قال حوالي 57٪ من الأمريكيين إنهم يفضلون الاستماع إلى البودكاست على أساس شهري.",
    radio_page_p_3:"قامت شركة اسطورة الابداع بتنفيذ مشروع تطبيق موبايل لاذاعة راديو ون اف ام. يسهل التطبيق لمتابعين راديو وان تتبع اخر الاخبار والبث الحي للبرامج التي تقدمها الاذاعة.",
    //our-work pages-gpm ------>
    gpm_page_p_1:"تطبيق متجر الكتروني لحاسبات المكتبية والمحمولة وكذلك للقطع غيار الحاسبات. يساعد هذا التطبيق الراغبين بشراء حاسبة محمولة بمواصفات معينة او حاسبة مكتبية تستعمل في التصاميم والالعاب وكذلك الراغبين بتطوير حاسباتهم في ايجاد مكان مخصص لكل هذه المتطلبات. يوفر التطبيق كافة الوسائل المطلوبة لاجراء عملية شراء اونلاين ناجحة مع طرق دفع مختلفة",
    //our-work pages-frahide ------>
    farahedi_page_p_1:"قامت شركتنا بتوفير تطبيق موبايل لطلية جامعة الفراهيدي يتيح لهم تتبع اخر الاعلانات التي تقدمها الجامعة بالاضافة الى المحاضرات وقوائم الحضور لكل محاضرة. باستخدام التطبيق يتمكن الطالب من الاطلاع على درجات امتحانه والاقساط المالية المتبقية عليه.",
    
    
    //contact section
    SayHi:"راســلنا الان",
    send:"أرســال",
    // join
    project:"هل لديك مشروع",
    Lets_talk_About:"لنتحدث معنا عن حلول الأعمال",
    //footer word
    If_you_want:"إذا كنت ترغب في العمل معنا ، أو تحتاج إلى مزيد من التفاصيل حول وظيفة ، أو الحصول على سيرة ذاتية ، فيجب عليك الاتصال بنا عبــر",
    Quick_Links:"روابـط سريعة",

};

console.log(document.querySelector("head"))

function ch_lang (){
        if(localStorage.getItem("lang") == "ar"){
            document.querySelector("html").dir = "rtl";
            let link = document.createElement("link");
            link.rel ="stylesheet";
            link.href = "css/UsersuserDesktopfile_projectdistrtl.css",
            document.querySelector("head").append(link)
            if(document.body.classList.contains("home")){
                document.querySelector(".nav-bullets").style.left = "50px"
                document.querySelector(".nav-bullets").style.right = "auto"
                document.querySelector(".splide__slide").parentElement.style.transform = "translateX(4722.56px)";
                document.querySelector(".tes").style.textAlign = "left"; 
                document.querySelectorAll("form i").forEach(el => {
                    el.style.left = "6%"
                    el.style.right = "auto"
                    
                });
            }
            
            // document.querySelector(".splide__list").style.transform = "translateX(4722.56px) !important";
            document.body.style.fontFamily = "cairo"
      }else{
        document.querySelector("html").dir = "ltr";
            let link = document.createElement("link");
            link.rel ="stylesheet";
            link.href = "css/bootstrap.min.css",
            document.querySelector("head").append(link)
            document.body.style.fontFamily = "cairo"
      }
}
ch_lang()
// تحدد يا لعة مخزونه ب الستورج واذا ما مخزون شي فناخذ الدفولت الانكليزي
var lang = localStorage.getItem("lang") == "ar" ? "ar" : "en";

// فكشن تدزلها اندكس ترجع الكلمه
function t(word) {
    // جيك اذا كلمه عربي ترجع ارراي ام عربي وذا لا ترجع ام انكليزي
  if (lang == "ar") return AR[word] ? AR[word] : word;
  else return EN[word] ? EN[word] : word;
}

function toogleLang() {
    // هنا تغير قيمه الستورج للغه الثانيه حته تتسيف ب متصفح
  let state = localStorage.getItem("lang") || "en";
  localStorage.setItem("lang", state == "ar" ? "en" : "ar");
  location.reload();
}

let words = document.querySelectorAll('[data-content]');
for (let i=0 ; i<words.length ; i++){
  // words[i].getAttribute('data-content')   هذا يمثل الاندكس
  // هسا ندور على الاندكس ونبدل القيمه مالته بالنص العربي او الانكليزي
  words[i].innerHTML = t(words[i].getAttribute('data-content'));

}

