// IIFE -- Immediately Invoked Function Expression
// AKA -- Anonymous Self-Executing Function

(function()
{
    function DisplayHomePage()
    {

        // Variable for text content to be displayed on page
        let paragraph1 = [`This webpage was created by Arsalan Arif Radhu and\n
                    Sanjivkumar Patel for the WEBD6201 for the Winter 2022 Semester\.\n
                    This website demonstrates the use of DOM Manipulation for Lab 1
                    \!\n It will be updated as the semester goes on and we are going to add more features
                    to this website, so please be on a look put for that\.`];
        let pageHeader = `Welcome Message:`;
        let titlePage = `Group 10 - Lab 1 Site`;

        console.log("Home Page");
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        });


        let MainContent = document.body.getElementsByClassName('container')[0];
        let ImgContent = document.body.getElementsByTagName('img')[0];


        let ParaOne = document.createElement("p");
        ParaOne.setAttribute("id", "ParaOne");
        ParaOne.setAttribute("class", "mt-3");
        
        ParaOne.textContent = paragraph1;

        MainContent.insertBefore(ParaOne, ImgContent);
        SetTitle(titlePage, MainContent);
        SetHeading(pageHeader, MainContent);
        
    }

    function DisplayProjectsPage()
    {
        console.log("Projects Page");

        ProjectsContent();
 
    }

    function DisplayServicesPage()
    {
        console.log("Services Page");

        ServiceContent();

    }

    function DisplayAboutPage()
    {
        console.log("About Page");

        AboutContent();
        
    }

    function DisplayRecourcesPage()
    {
        console.log("Human Resources Page");

        let title = `Human Resources`;
        let message = `This page is under construction!`;
        let ContentBody = document.body.getElementsByClassName("container")[0];

        let text1 = document.createElement('p');

        text1.innerHTML = message;

        ContentBody.insertAdjacentElement("afterbegin", text1);
        SetTitle(title, ContentBody);
    }

    function DisplayContactPage()
    {
        console.log("Contact Page");

        let sendButton = document.getElementById("sendButton");
        let fullName = document.getElementById("fullName").value;
        let contactNumber = document.getElementById("contactNumber").value;
        let emailAddress = document.getElementById("emailAddress").value;
        let customerMessage = document.getElementById("message").value;
        sendButton.addEventListener("click", function(event)
        {

            console.log("Full Name:"+fullName);
            console.log("Contact Number:"+contactNumber);
            console.log("Email Address:"+emailAddress);
            console.log("Message:"+customerMessage);
        });
    }



    // named function option
    function Start()
    {
        console.log("App Started!");

        // Replace an option in the navbar
        ReplaceLink();

        // Add in new human resources link
        AddNavLink();

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Favourite Projects":
                DisplayProjectsPage();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Human Resources":
                DisplayRecourcesPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
        }
       
    }

    // Function to replace text in nav bar
    function ReplaceLink()
    {
        // Select the specific navigation element to be changed - products link
        let NavContents = document.body.getElementsByClassName("nav-item")[1];

        // Create the new navigation list link and insert it
        // Completely replaces what was hardcoded in html
        let EditNavOption = '<a class="nav-link" href="products.html"><i class="fas fa-project-diagram"></i> Projects</a>';
        NavContents.innerHTML = EditNavOption;
    }

    function AddNavLink()
    {
        // Select the specific navigation element to be changed - products link
        let NavContents = document.body.getElementsByClassName("nav-item")[3];
        let NavList = document.createElement("li");
        NavList.setAttribute("class", "nav-item");

        let NewNavOption = '<a class="nav-link" href="resources.html"><i class="far fa-id-card"></i> Human Resources</a>';
        NavList.innerHTML = NewNavOption;
        NavContents.after(NavList);
        
        // For testing - Check if html element is inserted
        // console.log(NavList);
    }

    function ProjectsContent()
    {

        let title = `Our Favourite Projects`;
        let heading1 = `Ivan Mokrooussov - Projects:`;
        let heading2 = `Will Estanislao - Projects:`;
        let heading3 = `Project Screenshots:`;
        let paragraph1 = ['Creating File Text Editor - Visual Studio 2019.', 'FormAwesomness - A simple application with disappear button', 
                            'EntityFramework - Retriving data from local database, migration and following convertion this data into entities objects'];
        let paragraph2 = ['Draw A Square - An application that lets you draw squares', 
                        'Numbers Guessing Game - A simple guessing game coded in C#', 
                        'Quiz Game - A quiz game programmed in Turing. It had approximately 10 random trivia questions and music\!\nUnfortunately this game has been lost to time.'];

        // Select an element to find a position in the document
        let contentBody = document.body.getElementsByClassName('container')[0];
        let div1 = document.body.getElementsByClassName('list')[0];
        let div2 = document.body.getElementsByClassName('list')[1];
        
        // Create the ul that will contain the first set of projects listed
        let ProjectSet1 = document.createElement("ul");
        ProjectSet1.setAttribute("class", "list-1");

        // Create ul that will contain second set of projects
        let ProjectSet2 = document.createElement("ul");
        ProjectSet2.setAttribute("class", "list-1");
        
        // Loop to set Text
        list = SetTextLoop(paragraph1);
        list2 = SetTextLoop(paragraph2);

        ProjectSet1.innerHTML = list;
        ProjectSet2.innerHTML = list2;
        div1.appendChild(ProjectSet1);
        div2.appendChild(ProjectSet2);
        SetTitle(title, contentBody);
        SetHeading(heading1, div1);
        SetHeading(heading2, div2);
    }

    function ServiceContent()
    {
        let ContentBody = document.body.getElementsByClassName('photos')[0];
        let headingContent = document.body.getElementsByClassName('container')[0];

        let pageTitle =  `Our Services`;
        let headerTitle = `The Best of Our Skills`;
        let paragraph1 = ['Expertise in Web Design Techniques', 'Proficiency In Programming Languages', 
                        'Photography'];

        

        // Create the element
        let ProjectSet1 = document.createElement("ul");
        ProjectSet1.setAttribute("class", "list-1");
        

        list = SetTextLoop(paragraph1);

        ProjectSet1.innerHTML = list;
        ContentBody.insertAdjacentElement("beforebegin", ProjectSet1);

        SetTitle(pageTitle, headingContent)
        SetHeading(headerTitle, headingContent);

    }

    function AboutContent()
    {
        let Title = `About Us`;
        let MainContent = document.body.getElementsByClassName("container")[0];
        // Find element opening to start inserting from - Student id and name
        let ContentBody = document.body.getElementsByTagName('img')[0];
        let ContentBody2 = document.body.getElementsByTagName('img')[1];
        let student1 = ['Arsalan Arif Radhu', 'StudentID: 100813965'];
        let student2 = ['Sanjivkumar Patel', 'StudentID: '];

        // About content to be inserted
        let paragraph1 = `<p>\nHello, I am Arsalan Arif Radhu. I am currently pursuing Computer Programming and Analysis
        Advanced Diploma from Durham College\. I am a full-time student, currently working a part-time job at a restaurant\.
        I am looking for Co-op opportunitites for this Summer and hope to get an opportunity to work
        in the Data Analysis field\.</p>`;
        let paragraph2 = `<p></p>`;

        // Resume link
        let sanjivResume = `<a href="/Assets/">Check Out My Resume Here!</a>`;
        let arsalanResume = `<a href="/Assets/ArsalanResume.pdf"> My Resume! </a>`;

        // Create the element
        let ProjectSet1 = document.createElement("ul");
        ProjectSet1.setAttribute("id", "student-1");
        ProjectSet1.setAttribute("class", "list-1");
        // Create ul that will contain second set of projects
        let ProjectSet2 = document.createElement("ul");
        ProjectSet2.setAttribute("id", "student-2");
        ProjectSet2.setAttribute("class", "list-1");

        let textContent1 = document.createElement('div');
        textContent1.setAttribute("class", "para-about");
        textContent1.innerHTML = paragraph2
        textContent1.innerHTML += sanjivResume;
        let textContent2 = document.createElement('div');
        textContent2.setAttribute("class", "para-about");
        textContent2.innerHTML = paragraph1;
        textContent2.innerHTML += arsalanResume;

        list = SetTextLoop(student1);
        list2 = SetTextLoop(student2);

        ProjectSet1.innerHTML = list;
        ProjectSet2.innerHTML = list2;
        ContentBody.insertAdjacentElement("beforebegin", ProjectSet1);
        ContentBody.insertAdjacentElement("afterend", textContent2);
        ContentBody2.insertAdjacentElement("beforebegin",ProjectSet2);
        ContentBody2.insertAdjacentElement("afterend", textContent1);
        SetTitle(Title, MainContent);

    }

    function SetTextLoop(textArray)
    {
        let list = '';

        for (const textLine of textArray)
        {
            list += `<li>${textLine}</li>`;
        }

        return list;
    }

    function SetTitle(title, position)
    {
        let pageTitle = document.createElement("h1");

        pageTitle.innerHTML = title;

        titleElement = position.insertAdjacentElement("beforebegin", pageTitle);

        return titleElement;
    }

    function SetHeading(header, position)
    {
        let headerTitle = document.createElement("h3");

        headerTitle.innerHTML = header;

        headerElement = position.insertAdjacentElement("afterbegin", headerTitle);

        return headerElement;
    }

    window.addEventListener("load", Start);

})();