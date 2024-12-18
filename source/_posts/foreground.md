---
title: foreground
byline: Bespoke design system with unified color system, typography, iconography, components, and UX patterns
date: 2018-04-05 00:01:02
categories:
  - [design]
  - [code]
  - [visuals]
cover_image: 2018/04/05/foreground/foreground-preview.jpg
fullscreen: true
---

<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">

<style>
  html {
      overflow: hidden;
      overscroll-behavior-y: none;
      height: 100%;
  }
  .post {
    all: unset;
  }
  .content {
    all: unset;
  }
  * {
    box-sizing: border-box;
  }
  nav {
    position: fixed;
  }
  article {
    height: fit-content;
  }
  footer {
    display:none;
  }
  .container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    max-width: unset;
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width: 100vw;
    overflow: hidden;
    margin-top: 1px;
  }
  .column {
    display: flex;
    flex-direction: column;
    padding-top: 63px;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    overflow-y: scroll;
    transition: all ease-in-out 300ms;
  }
  .col-1 {
    background: rgba(0,0,255,0.01);
    border-right: solid 1px rgba(0,0,0,0.12);
    flex-grow: 0;     /* do not grow   - initial value: 0 */
    flex-shrink: 0;   /* do not shrink - initial value: 1 */
    flex-basis: 255px; /* width/height  - initial value: auto */
  }
  .title-bar {
    display: flex;
    flex-direction: row;
    min-height: 24px;
    align-items: : center;
    padding-left: 24px;
    width: 100%;
  }
  .title-bar-title {
    font-size: 24px;
  }
  .nav-stack ul {
    padding-right: 0;
    padding-left: 0;
  }
  .nav-stack ul * {
    list-style: none;
    transition: all ease-out 150ms;
    padding-left:16px;
  }
  .nav-stack ul li {
    border-radius:3px;
    margin-top:3px;
    margin-bottom:3px;
    text-decoration: none;
    padding-left: 0;
  }
  .nav-stack ul li:hover {
    background: rgba(0,0,0,0.075);
    margin-top:3px;
    margin-bottom:3px;
    text-decoration: none;
  }
  .nav-stack ul li a {
    display: flex;
    flex: 1;
    padding: 6px;
    text-decoration: none;
    align-items: center;
    color: grey;
  }
  .nav-stack ul li a.active {
    background: linear-gradient(90deg, rgba(0,0,0,0.075) 0%, rgba(0,0,0,0.0) 100%);
    border-radius: 3px;
  }
  .nav-stack ul li a:hover {
    color: black;
  }
  .nav-stack ul li a:hover > *  {
    fill: black;
  }
  .nav-stack ul li a svg {
    width: 30px;
    height: 30px;
    fill: grey;
    margin-right: 9px;
  }
  .col-2 {
    background: white;
    border-right: solid 1px rgba(0,0,0,0.12);
    flex: 6 4 auto;
  }
  .center-container {
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
  }
  .center-container.fade-out {
    opacity: 0;
  }
  .color-tower {
    display: flex;
    flex-direction:row;
    max-width:660px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  .color-tower > * {
    transition: all ease-out 150ms;
    height: 124px;
    width: 2.7%;
  }
  .color-tower > *:hover {
    filter: hue-rotate(12deg);
    margin-top: 6px;
    margin-bottom: 6px;
    box-shadow: 0 6px 24px rgba(0,0,0,0.12);
    z-index: 999;
  }
  .red-0{background-color:#2E0C0E;}.red-1{background-color:#5C191C;}.red-2{background-color:#8A262A;}.red-3{background-color:#B83338;}.red-4{background-color:#E64046;}.red-5{background-color:#EB666B;}.red-6{background-color:#F08C90;}.red-7{background-color:#F5B2B5;}.red-8{background-color:#FAD8DA;}
  .orange-0{background-color:#4A1E01;}.orange-1{background-color:#773F04;}.orange-2{background-color:#A46007;}.orange-3{background-color:#D1810A;}.orange-4{background-color:#FFA30D;}.orange-5{background-color:#FEB53E;}.orange-6{background-color:#FEC76F;}.orange-7{background-color:#FDD9A0;}.orange-8{background-color:#FDECD2;}
  .green-0{background-color:#0B230C;}.green-1{background-color:#1A421B;}.green-2{background-color:#29622B;}.green-3{background-color:#38823B;}.green-4{background-color:#47A24B;}.green-5{background-color:#6CB86F;}.green-6{background-color:#92CE94;}.green-7{background-color:#B7E4B9;}.green-8{background-color:#DDFADE;}
  .blue-0{background-color:#102034;}.blue-1{background-color:#1E3C5F;}.blue-2{background-color:#2D588B;}.blue-3{background-color:#3B74B6;}.blue-4{background-color:#4A90E2;}.blue-5{background-color:#6DA6E8;}.blue-6{background-color:#90BCEF;}.blue-7{background-color:#B3D2F6;}.blue-8{background-color:#D7E9FD;}
  .right-container {
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
    max-width: 330px;
    margin-left: auto;
    margin-right: auto;
  }
  .right-container p {
    color: grey;
  }
  .right-container.fade-out {
    opacity: 0;
  }
  #col-3.hide-aside {
    flex: 0;
  }
  .icons-iconGrid {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 630px;
    margin-left:auto;
    margin-right:auto;
    padding: 9px 0;
  }
  .icons-imageBlock {
    border-radius: 6px;
    padding:9px 9px 6px 9px;
    margin: 3px;
    width: fit-content;
    transition: all ease 450ms;
  }
  .icons-imageBlock:hover {
    box-shadow: 0 3px 12px rgba(0,0,0,0.06);
  }
  .component-grid {
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    max-width: 630px;
    margin-left: auto;
    margin-right: auto;

  }
  .component-grid > * {
    margin: 6px;
    border-radius: 12px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: intrinsic;
    /* padding: 6px;
    border-radius: 6px;
    box-shadow: 0 12px 24px rgba(0,0,0,0.06); */
  }
  .col-3 {
    background: white;
    border-right: solid 1px rgba(0,0,0,0.12);
    flex: 2 0 auto;
  }
  @media only screen and (max-width: 1002px) and (orientation: portrait),
   only screen and (max-width: 1002px) and (orientation: landscape)  {
    .container {
      display: block;
      height: 100%;
    }
    .title-bar {
      padding:0;
    }
    .title-bar-title {
      font-size: 21px;
    }
    .column {
      padding-top: 0;
      padding-bottom: 0;
    }
    .col-1 {
      padding-left: 0;
      padding-right: 0;
      margin-top:48px;
      display: block;
      height: auto;
      text-align:center;
    }
    .nav-stack {
      display: inline-flex;
      margin-left: auto;
      margin-right: auto;
    }
    .nav-stack ul {
      display: inline-flex;
      padding: 0;
      margin-top: 3px;
      margin-bottom: 3px;
    }
    .nav-stack ul * {
      padding-left: 0;
    }
    .nav-stack ul li a {
      flex-direction: column;
      align-items: center;
      overflow-x: hidden;
      overflow-y: scroll;
      color: grey;
      margin-left:3px;
      margin-right:3px;
      font-size: 10px;
      font-weight: 400;
    }
    .nav-stack ul li a:hover {
      color: black;
    }
    .nav-stack ul li a.active {
      background: none;
    }
    .nav-stack ul li a svg {
      width: 24px;
      height: 24px;
      margin-bottom: 6px;
      margin-right: 0;
      fill: grey;
    }
    .col-2 {
      height: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
      text-wrap: wrap;
      display: block;
      padding-bottom: 124px;
    }
    .col-3 {
      display:none;
    }
  }
  @media (prefers-color-scheme: dark) {
    body {
      background:black;
      color: white;
    }
    hr {
      border-color: rgba(255,255,255,0.12);
    }
    .col-1 {
      background-color: #0b0b0b;
    }
    .nav-stack ul li:hover {
      background-color: rgba(255,255,255,0.09);
    }
    .nav-stack ul li a {
      color: grey;
    }
    .nav-stack ul li a:hover {
      color: white;
    }
    .nav-stack ul li a svg {
      fill: grey;
    }
    .nav-stack ul li a:hover > * {
      fill: white;
    }
    .nav-stack ul li a.active {
      background: linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.0) 100%);
      border-radius: 3px;
    }
    .col-2 {
      background-color: #000;
    }
    .icons-iconGrid {
      background: rgba(255,255,255,0.9);
      border-radius: 6px;
    }
    .col-3 {
      background-color: #0b0b0b;
    }
    .right-container p {
      color:grey;
    }
  }
</style>

<div class="container">
  <div class="column col-1">
    <div class="nav-stack">
      <ul>
          <li>
            <a id="home" class="nav-button" href="#" onclick="changeContent('home')">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 6V5H7V6H2Z" />
                <path d="M2 8V7H7V8H2Z" />
                <path d="M2 9V10H7V9H2Z" />
                <path d="M2 12V11H7V12H2Z" />
                <path d="M2 13V14H7V13H2Z" />
                <path d="M11 10V9H16V10H11Z" />
                <path d="M11 11V12H16V11H11Z" />
                <path d="M11 14V13H16V14H11Z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C10.5 1 10.25 1.25 10 1.50001C9.7508 1.74921 9.5016 1.99841 9.00478 2H8.99522C8.4984 1.99841 8.2492 1.74921 8 1.50001C7.75 1.25001 7.5 1.00001 7 1.00001L0 1V18H18V1L11 1ZM8.5 2.89412C8.29803 2.79804 8.14902 2.64903 8 2.50001C7.75 2.25001 7.5 2.00001 7 2.00001H1V16C3.66666 16 5 15.5556 5.88889 15.2593C6.33333 15.1111 6.66666 15 7 15C7.5 15 7.75 15.25 8 15.5C8.14902 15.649 8.29803 15.798 8.5 15.8941V2.89412ZM9.5 15.8941C9.70196 15.798 9.85098 15.649 10 15.5C10.25 15.25 10.5 15 11 15C11.3333 15 11.6667 15.1111 12.1111 15.2593C13 15.5556 14.3333 16 17 16V2.00001L16 2V8L14 7L12 8V2.00001H11C10.5 2.00001 10.25 2.25001 10 2.50001C9.85098 2.64902 9.70196 2.79804 9.5 2.89411V15.8941Z" />
              </svg>
              Introduction
            </a>
          </li>
      </ul>
      <ul>
        <li>
          <a id="color" class="nav-button" href="#" onclick="changeContent('color')">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
            <path d="M0 17H16L8 1L0 17Z"/>
          </svg>
          Color
        </a>
      </li>
        <li>
          <a id="typography" class="nav-button" href="#" onclick="changeContent('typography')">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2.14364C11 1.15322 15 0.162795 15 2.14364C15 5.61013 13 7.09576 13 7.09576L5 13.0383C5 13.0383 1.88651 15.2851 1 16.0096C0.639373 16.3043 0.414048 16.5523 0.227306 16.7579C0.146968 16.8464 0.0737587 16.9269 0 17C2 12.0479 9 3.13407 10 2.14364ZM2 14.0287L10.5 3.13407C12 2.14364 13 2.14364 14 3.13407H12L13 4.12449H11L12 5.11491H10C9.50556 5.63131 2 14.0287 2 14.0287Z" />
              <path d="M0 17C0 17 13.6773 16.0309 14 16.0096C14.3227 15.9883 15 16.0096 15 16.5048C15 17 14 17 14 17H0Z" />
            </svg>
            Typography
          </a>
        </li>
        <li><a id="iconography" class="nav-button" href="#" onclick="changeContent('iconography')">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4.99999 9.00001C5.73637 9.00001 6.33332 8.40306 6.33332 7.66668C6.33332 6.9303 5.73637 6.33334 4.99999 6.33334C4.26361 6.33334 3.66666 6.9303 3.66666 7.66668C3.66666 8.40306 4.26361 9.00001 4.99999 9.00001Z" />
            <path d="M11 9L12 10C12 10 11.5 12 9 12C6.5 12 6 10 6 10L7 9C7 9 7 11 9 11C11 11 11 9 11 9Z" />
            <path d="M14.3333 7.66668C14.3333 8.40306 13.7364 9.00001 13 9.00001C12.2636 9.00001 11.6667 8.40306 11.6667 7.66668C11.6667 6.9303 12.2636 6.33334 13 6.33334C13.7364 6.33334 14.3333 6.9303 14.3333 7.66668Z" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 9C18 13.9706 14 17 9 17C4 17 0 13.9706 0 9C0 4.02944 4 1 9 1C14 1 18 4.02944 18 9ZM17 9C17 13.4183 13.4444 16.1111 9 16.1111C4.55556 16.1111 1 13.4183 1 9C1 4.58172 4.55556 1.88889 9 1.88889C13.4444 1.88889 17 4.58172 17 9Z" />
          </svg>
          Iconography
        </a>
      </li>
        <li>
          <a href="#" class="nav-button" onclick="changeContent('components')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
              <path d="M9 2V7C9 7.5 9.5 8 10 8H15C15.5 8 16 7.5 16 7V2C16 1.5 15.5 1 15 1H10C9.5 1 9 1.5 9 2Z" />
              <path d="M0 2V7C0 7.5 0.5 8 1 8H6C6.5 8 7 7.5 7 7V2C7 1.5 6.5 1 6 1H1C0.5 1 0 1.5 0 2Z" />
              <path d="M9 11V16C9 16.5 9.5 17 10 17H15C15.5 17 16 16.5 16 16V11C16 10.5 15.5 10 15 10H10C9.5 10 9 10.5 9 11Z" />
              <path d="M0 11V16C0 16.5 0.5 17 1 17H6C6.5 17 7 16.5 7 16V11C7 10.5 6.5 10 6 10H1C0.5 10 0 10.5 0 11Z" />
            </svg>
            Components
          </a>
        </li>
      </ul>
      <ul>
          <li>
            <a id="application" class="nav-button" href="#" onclick="changeContent('application')">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.2 14H7V16H5C5 16 4 16 4 16.5C4 17 5 17 5 17H13C13 17 14 17 14 16.5C14 16 13 16 13 16H11V14H16.8C17.4 14 18 13.4 18 12.8V3.2C18 2.6 17.4 2 16.8 2H1.2C0.6 2 0 2.6 0 3.2V12.8C0 13.4 0.6 14 1.2 14ZM1 3H17V11H1V3ZM17 12H1V13H17V12Z" />
              </svg>
              Application
            </a>
          </li>
      </ul>
    </div>
  </div>
   <div class="column col-2">
     <div class="center-container" id="center-container">
     </div>
   </div>
   <div id="col-3" class="column col-3">
     <div class="right-container" id="right-container">
      </div>
   </div>
  </div>
<script>
  const pageContent = {
      home: {
          title: "<img style='max-width:630px;width: 100%;height: auto;' src='COVER.png'/>",
          content: "<p>As the founding designer at Human Interest, one of the largest, most grueling journeys I undertook was to unify our design approach with the creation of foreground, our first design system. Faced with the task of creating a design system that not only combined all of my learnings from building an easy to use 401(k) administration and contribution tool but a new brand that was needed to cultivate trust and a white-glove level of service, I worked tirelessly to balance the considerations of color, typography, iconography, and application to delivery a result that was both successful and easy to implement.<br/><br/>Balancing the need for clarity and functionality with the desire for a modern, trustworthy aesthetic was a delicate tightrope walk. However, through thoughtful design decisions and strategic branding elements, foreground emerged as a solution that seamlessly integrated the practical demands of financial administration with a visually appealing and easy-to-use interface.<br/><br/>This project was informed by comprehensive research— from competitive audits to regular interviews with our customers and copious amounts of testing and reworking. It was a long and arduous project, and gave me a new found respect for the effort involved in building and maintaining a successful design system and consistent brand language.</p><hr/><div class='alert alert-yellow'><div class='alert-inner'><div class='alert-icon'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin: auto; display: block;' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'><path d='M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50' fill='#0a0a0a' stroke='none'><animateTransform attributeName='transform' type='rotate' dur='1s' repeatCount='indefinite' keyTimes='0;1' values='0 50 51;360 50 51'></animateTransform></path></svg></div><div class='alert-gutter'></div><div class='alert-copy'><span class='alert-copy-title'>Post in-progress</span><span class='alert-copy-body'>This re-upload mostly contains the original content from the first write-up I did of this project for a Behance page several years ago, though I plan to go through and do a more complete write-up on what my process was for each aspect. If you want to view that version, <a href='foreground.jpg'>here you go!</a></span></div></div></div>"
      },
      color: {
          title: "Color",
          content: "Human Interest was all about providing otherwise restrictive services in a white-glove, personable way. This ethos guided the development of our color system, infusing it with a premium feel where bright colors were strategically employed to accentuate generous white space. Standardizing around this palette fostered a shared language between our design and engineering teams, streamlining collaboration and making handoffs seamless.<hr/><div class='color-tower'><div class='red-0'></div><div class='red-1'></div><div class='red-2'></div><div class='red-3'></div><div class='red-4'></div><div class='red-5'></div><div class='red-6'></div><div class='red-7'></div><div class='red-8'></div><div class='orange-0'></div><div class='orange-1'></div><div class='orange-2'></div><div class='orange-3'></div><div class='orange-4'></div><div class='orange-5'></div><div class='orange-6'></div><div class='orange-7'></div><div class='orange-8'></div><div class='green-0'></div><div class='green-1'></div><div class='green-2'></div><div class='green-3'></div><div class='green-4'></div><div class='green-5'></div><div class='green-6'></div><div class='green-7'></div><div class='green-8'></div><div class='blue-0'></div><div class='blue-1'></div><div class='blue-2'></div><div class='blue-3'></div><div class='blue-4'></div><div class='blue-5'></div><div class='blue-6'></div><div class='blue-7'></div><div class='blue-8'></div></div>"
      },
      typography: {
          title: "Typography",
          content: "Typography played a pivotal role in our design system, necessitating a font that embodied modernity, readability for extensive datasets, and the gravitas suited for a 401(k) startup. After careful evaluation of numerous options, we settled on Inter as the ideal choice. Its contemporary look, combined with excellent readability even with large datasets, aligned perfectly with our objectives. Moreover, Inter's regular updates and adaptability made it well-suited for our dynamic requirements. To assess its effectiveness, we recreated all subpages of our website and screens of our web product using Inter at various sizes, conducting user testing sessions to gain insights into its usability and impact on user experience.<br/><br/>Integrating Inter presented a unique challenge due to the clash between our branding's preference for classical serif fonts to evoke trust and the modern essence of our product. Competitive audits of financial entities and products familiar to our target audience informed our decision-making process. Additionally, draft designs were shared with customers to gather early-stage feedback, ensuring alignment with their preferences and expectations. Through these iterative processes, we gained confidence in Inter as the cornerstone of our typographic strategy, blending modernity with trustworthiness to reinforce our design system.<hr/><p>![](text.jpg)</p>"
      },
      iconography: {
          title: "Iconography",
          content: "Crafting icons for a startup dedicated to offering 401(k) solutions to medium-sized businesses presented unique challenges in an industry where regulations reigned and material visuals were scarce. Navigating complex financial jargon demanded intuitive visual aids. Considering users often skimmed through screens in mere seconds, the importance of crisp, straightforward imagery could not be overstated. These icons were designed to swiftly convey intricate concepts, empowering users to make informed decisions with ease and confidence.<hr><p>![](hicons.jpg)</p>"
      },
      components: {
          title: "Components",
          content: "The most intensive part of this project, the components ended up being both passion project and source of countless revisions as I tried to craft the perfect interactive components for Human Interest's suite of products.<hr/><p><a href='componentsPreview.png'>![](componentsPreview.png)</a></p>"
      },
      designValues: {
          title: "Components / Design values",
          content: "Modular-- Make flexible components that can be adapted to any product need.<br/><br/>Simple to implement-- Get as close to a drag-and-drop functioanlity as possible.<br/><br/>Meticulously crafted-- Every decision should be carefully thought out and considered."
      },
      architecture: {
          title: "Components / Architecture",
          content: "One of my major goals for the design system was to make the transition from design mockup to production code seamless. Components are built in such a way that engineers would be able to mimic all of the changes designers could make. Styles are simple to update, thanks to a nested LESS architecture which makes wide-reaching changes easy."
      },
      usability: {
          title: "Components / Usability",
          content: "Every interaction with your product matters. The smallest frustrations or issues add up rapidly, and can leave you wondering why your users aren't excited about being champions of your product. Keeping in mind the mantra, “don't make me think”, all of the components were designed with an eye for comprehension and ease-of-use."
      },
      breadth: {
          title: "Components / Breadth",
          content: "A large part of what makes a design system useful is that the shared language of components avoids the necessity of reinventing the wheel every time a new project begins. Since the amount of time to develop a system like this is always constrained, I performed an analysis of all of our products to determine which elements were the most frequently used, as well as those that had the most glaring need of an update."
      },
      delightful: {
          title: "Components / Delightful",
          content: "The final challenge revolved around making a user’s experience with each component a pleasure to use. I felt that this is often overlooked (particularly in the financial industry), so to make Human Interest feel more personable, small animations and transitions were added to every interaction."
      },
      application: {
          title: "Application",
          content: "The component system really comes into its own when you start using it to build interfaces. All of the previous considerations that went into designing each component come together and create a cohesive experience, regardless of the use case.<br/><br/>Additionally, because of the flexibility of how the components were built, all of these pages become near drag-and-drop simple to implement in production.<hr/><p><a href='ppt dash.jpg'>![](ppt dash.jpg)</a><a href='Fauxdal.jpg'>![](Fauxdal.jpg)</a></p>"
      }
  };
  function changeContent(page) {
      // Retrieve the containers
      const navButtons = document.querySelectorAll('.nav-button');
      var centerContainer = document.getElementById('center-container');
      var rightContainer = document.getElementById('right-container');
      var rightColumn = document.getElementById('col-3');
      // Get the content for the selected page
      var selectedContent = pageContent[page];
      // Preprocess content to replace Hexo image shortcuts with HTML img tags
      var processedContent = selectedContent.content.replace(/!\[\]\((.*?)\)/g, '<img src="$1" alt="">');
      // Wrap text content in <p> blocks
      processedContent = processedContent.split('\n').map(line => {
          if (!line.trim().startsWith('<') && line.trim() !== '') {
              return `<p>${line.trim()}</p>`;
          }
          return line;
      }).join('\n');
      // Add fade-out class to trigger animation
      centerContainer.classList.add('fade-out');
      rightContainer.classList.add('fade-out');
      // Update the right container with the processed content after a brief delay to allow animation to take effect
      setTimeout(function() {
          rightColumn.classList.add('hide-aside');
          centerContainer.innerHTML = `<h2>${selectedContent.title}</h2>${processedContent}`;
          if (selectedContent.aside) {
              rightContainer.innerHTML = `<p>${selectedContent.aside}</p>`;
              rightColumn.classList.remove('hide-aside');
          } else {
            rightContainer.innerHTML = ``;
            rightColumn.classList.add('hide-aside');
          }
          navButtons.forEach(button => {
            button.addEventListener('click', function() {
              navButtons.forEach(btn => {
                btn.classList.remove('active');
              });
              // Add 'active' class to the clicked button
              this.classList.add('active');
            });
          });
          // Remove fade-out class to allow fade-in animation
          centerContainer.classList.remove('fade-out');
          rightContainer.classList.remove('fade-out');
      }, 300); // Adjust the delay time to match transition duration
  }
  window.onload = function() {
      changeContent('home');
      document.getElementById('home').classList.add('active');
  };
</script>
