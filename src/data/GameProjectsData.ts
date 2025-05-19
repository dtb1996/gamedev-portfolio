import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-super-mini-golf", "Super Mini Golf (In Progress)", "img/projects/super-mini-golf.png", `
        <div class="paragraph">
            Super Mini Golf is a mashup of Mini Golf and Super Monkey Ball made in UE5. Instead of hitting the ball with a golf club, the stage is tilted to move the ball. This project is still in active development.
        </div>
    
        <div class="paragraph center">
            <iframe class="youtube" src="https://www.youtube.com/embed/LzQzw4D6lqI?si=chtmpHRNRKQCH77C" frameborder="0" allowfullscreen></iframe>
        </div>
    
        <h3>Features</h3>
        <div class="paragraph">
            <ul>
                <li>Custom camera tilt to give the illusion of tilting the stage to move the ball</li>
                <li>Custom pawn movement using a combination of torque and direct force to give the player full control and make navigation feel responsive</li>
                <li>UI layering system designed to make adding and removing visual widgets easy</li>
            </ul>
        </div>
    
        <h3>Roles</h3>
        <div class="paragraph">
            Programmer, Designer
        </div>

        <h3>Attribution</h3>
        <div class="paragraph">
            UI Designs by Umar Ali<br>
            Timer icons created by <a href="https://www.flaticon.com/free-icons/timer" target="_blank">fjstudio - Flaticon</a><br>
            "Golf Ball" by <a href="https://skfb.ly/oAVrx" target="_blank">Safina Irani</a> is licensed under Creative Commons Attribution<br>
            "Lowpoly gold coin" by <a href="https://skfb.ly/69CRK" target="_blank">BlobFortress</a> is licensed under Creative Commons Attribution<br>

        `, "#5a78af", false, true),
    new ProjectData("project-ue5-item-inspector", "UE5 Item Inspector", "img/projects/ue5-item-inspector-plugin-icon.png", `
        <div class="paragraph">
            The UE5 Item Inspector is a extendable system for inspecting in-game objects. Originally created as a shop item viewer for an independent client.
        </div>
    
        <div class="paragraph center">
            <video width="90%" autoplay controls loop>
            <source src="video/projects/ue5-object-inpector-demo.mp4" type="video/mp4">
            Your browser does not support the video tag.
            </video>
        </div>
    
        <h3>Features</h3>
        <div class="paragraph">
            <ul>
            <li>Data Table for storing specific item details, such as display name and 3D mesh</li>
            <li>Interactable item viewer UI that pulls info from interactable item</li>
            <li>Separate light box for item viewer, allowing full control over item lighting</li>
            </ul>
        </div>
    
        <h3>Roles</h3>
        <div class="paragraph">
            Programmer, Designer
        </div>

        <h3>Attribution</h3>
        <div class="paragraph">
            "Carpenter's Workshop" environment and models by <a href="https://cosmos.leartesstudios.com/environments?service=leartes" target="_blank">Leartes Studios</a>
        </div>
        
        `, "#5a78af"),
    new ProjectData("project-canoo-infotainment", "Canoo Infotainment", "img/projects/canoo-infotainment-icon.png", `
    <div class="paragraph">
        Worked as part of the HMI team responsible for implementing new features and maintaining the existing front end codebase of 
        the infotainment touchscreen display for multiple vehicle models.
    </div>

    <div class="paragraph center">
        <img src="img/projects/canoo-infotainment-icon.png" alt="Canoo Infotainment" style="width: 90%">
        <br/>Image by <a href="https://www.press.canoo.com/" target="_blank">Canoo</a>.
    </div>

    <h3>Key Responsibilities</h3>
    <div class="paragraph">
        <ul>
        <li>Maintain the infotainment front end software for both Qt and UE4 versions</li>
        <li>Work closely with QA team to ensure software was production-ready, quickly implementing fixes for any bugs discovered during the testing process</li>
        <li>Work with UI/UX team to ensure the design vision was maintained and the display provided the customer with the best
        possible experience</li>
        <li>Acted as the key contributor for numerous front end features, such as Bluetooth media/calling and alert notifications</li>
        </ul>
    </div>

    <h3>Role</h3>
    <div class="paragraph">
        UI Engineer
    </div>
    
    `, "#5a78af"),
    new ProjectData("project-ue5-inventory", "UE5 Inventory Manager Plugin", "img/projects/ue5-inventory-plugin-icon.png", `
        <div class="paragraph">
            The UE5-Inventory-Manager Plugin is a flexible system designed to be the base for a fully-fledged inventory system.
        </div>

        <div class="paragraph center">
            <img src="img/projects/ue5-inventory-plugin-demo.gif" alt="UE5 Inventory Manager Plugin" style="width: 90%">
        </div>
    
        <div class="paragraph">
            <div class="notice">
            Source code available on <a href="https://github.com/dtb1996/UE5-Inventory-Manager" target="_blank">GitHub</a>.
            </div>
        </div>
    
        <h3>Features</h3>
    
        <div class="paragraph">
            <ul>
            <li>Customizable item lists and categories</li>
            <li>Data Table for storing specific item details, such as icon images and 3D meshes</li>
            <li>Global item info lookup function</li>
            <li>Example player controller blueprint and map, demonstrating possible implementation ideas</li>
            </ul>
        </div>
    
        <h3>Roles</h3>
        <div class="paragraph">
            Programmer, Designer
        </div>
        
        `, "#5a78af"),
    new ProjectData("project-lumi-snake", "Lumi-Snake", "img/projects/lumi-snake-icon.png", `
    <div class="paragraph">
        A variation on the classic Snake game created for the Gamedev.js Jam 2024.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/n_vH8Ej7u0s" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://dillionaire.itch.io/lumi-snake" target="_blank">itch.io</a>.
        Source code available on <a href="https://github.com/dtb1996/lumi-snake/tree/main" target="_blank">GitHub</a>.
        </div>
    </div>

    <h3>How it was made</h3>

    <div class="paragraph">
        <strong>Tech Used</strong>: HTML, CSS, JavaScript
    </div>

    <div class="paragraph">
        The goal of this project was to use basic web tools to make a simple game. Normally I use an engine like Unreal Engine or Godot for game development, 
        so this was an opportunity to step out of my comfort zone and learn how to build a web page that doubles as a simple game. This game also includes a 
        demo mode with simple logic to control the snake while in the menu.
    </div>

    <h3>Optimizations</h3>

    <div class="paragraph">
        <strong>Base64 audio conversion</strong>: One of the optional jam challenges was to fit the entire game into a 13 kb zip file. To include sound effects 
        I decided to use an online Base64 audio conversion tool to reduce their storage footprint.
    </div>

    <div class="paragraph">
        <strong>Reused code</strong>: To reduce the complexity and size of the project, the demo snake controller uses the same snake object and game logic as 
        the in-game snake. The major difference between the two modes in how the movement velocity is calculated since the demo snake needs to move without 
        player input.
    </div>

    <h3>Reflection</h3>

    <div class="paragraph">
        <strong>Define game states early</strong>: To reduce the complexity and size of the project, the demo snake controller uses the same snake object and 
        game logic as the in-game snake. The major difference between the two modes in how the movement velocity is calculated since the demo snake needs to 
        move without player input.
    </div>

    <h3>Roles</h3>
    <div class="paragraph">
        Programmer, Designer
    </div>
    
    `, "#5a78af"),
    new ProjectData("project-into-the-knight", "Into the Knight", "img/projects/into-the-knight-icon.png", `
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/liI8RBLi_yE" frameborder="0" allowfullscreen></iframe>
    </div>
    
    <div class="paragraph">
        <div class="notice">
        View game on <a href="https://store.steampowered.com/app/1591410/Into_the_Knight/" target="_blank">Steam</a>.
        </div>
    </div>

    <h3>Roles</h3>
    <div class="paragraph">
        Programmer, Designer, Music
    </div>
    
    `, "#5a78af"),
    new ProjectData("project-dodgeball-x", "Dodgeball X", "img/projects/dodgeball-x-icon.png", `
    <div class="paragraph">
        Inspired by Pong and created within 48 hours for the GMTK Game Jam 2020.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/9LUUY3vkqDM" frameborder="0" allowfullscreen></iframe>
    </div>
    
    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://dillionaire.itch.io/dodgeball-x" target="_blank">itch.io</a>.
        </div>
    </div>

    <h3>Roles</h3>
    <div class="paragraph">
        Programmer, Designer, Music
    </div>
    
    `, "#5a78af")
];