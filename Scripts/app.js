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

        Services();

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
        let message = `Upcoming!`;
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
        
    }

    function ProjectsContent()
    {

        let title = `<u>Our Projects</u>`;
        let heading1 = `Arsalan Arif Radhu - Projects:`;
        let heading2 = `Sanjivkumar Patel - Projects:`;
        let paragraph1 = ['hello'];
        let paragraph2 = ['helo'];

        // Select an element to find a position in the document
        let contentBody = document.body.getElementsByClassName('container')[0];
        let div1 = document.body.getElementsByClassName('list')[0];
        let div2 = document.body.getElementsByClassName('list')[1];
        
        // Create the ul that will contain the first set of projects listed
        let ProjectSet1 = document.createElement("ol");
        ProjectSet1.setAttribute("class", "list-1");

        // Create ul that will contain second set of projects
        let ProjectSet2 = document.createElement("ol");
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

    function Services()
    {
      // Store array of services
      let sanjivServices = [
        {
          serviceType: "Web Development",
          name: "Sanjivkumar Patel",
          image: "./Assets/webdev.jpeg",
          content: "Help improve your businesses online presence with a new, customized website."
        },
        {
          serviceType: "Web Design",
          name: "Sanjivkumar Patel",
          image: "./Assets/design.jpeg",
          content: "Interested in a new look for your brand? Sanjiv has the design skills to create a new brand profile.",  
        },
        {
          serviceType: "Copywriting",
          name: "Sanjivkumar Patel",
          content: "Worried about your spelling and grammar? Let our in-house copywriters create polished content.", 
          image: "./Assets/copywriting.jpeg",
        },
      ];

      let arsalanServices = [
        {
          serviceType: "Software Development",
          name: "Arsalan Arif Radhu",
          image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          content: "Have an idea for an app or website? Reach out to us and we can give you a quote on it!" 
        },
        {
          serviceType: "Application Support",
          name: "Arsalan Arif Radhu",
          image: "https://images.pexels.com/photos/4560083/pexels-photo-4560083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          content: "Already have a system in place, but don't know how (or don't have time!) to keep it updated? \
                    After some information collection about the system, we'll be able to help you keep it in check!" 
        },
        {
          serviceType: "System Development Lifecycle",
          name: "Arsalan Arif Radhu",
          image: "https://ak.picdn.net/shutterstock/videos/1020779143/thumb/11.jpg",
          content: "Have a system that you want to build but don't know where to start? Don't worry! With continued communication \
                    we will help to walk you through the life-cycle as well as building your dream project!" 
        },
      ];
      
      // Create container to store services cards
      let containerOne = document.querySelector(".container");
      let servicesContainer = document.createElement("div");
      servicesContainer.classList += "container mx-auto row g-lg-3 mb-5 justify-content-center services mb-3";
      containerOne.after(servicesContainer);

      // Empty string to store HTML containing services cards
      let servicesHTML = "";

      /**
       * displayServiceCards - renders an array of project objects into DOM
       * @param {Array} services
       */
      function displayServiceCards(services) {
        services.forEach(service => {
          const { name,serviceType, image, content } = service;
          servicesHTML += `
            <div class="card text-center col-md-5 col-lg-3 p-4 mb-5 mx-2">
              <h4>${serviceType}</h4>
              <h6>${name}</h6>
              <p>${content}</p>
              <img src="${image}" class="mx-auto services-img mb-3" />
            </div>
          `;
        });
      }  
      
      // Call displayServiceCards function to render HTML for all project cards
      displayServiceCards([...sanjivServices, ...arsalanServices]);

      document.querySelector('.services').innerHTML += servicesHTML;
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