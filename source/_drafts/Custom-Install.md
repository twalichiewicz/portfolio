---
title: Custom Install
byline: Complete overhaul of the advanced installation experience for Autodesk products
date: 2023-08-30 20:52:01
categories:
  - [research]
  - [design]
  - [code]
cover_image: 2023/08/26/Custom-Install/customInstall-preview.png
fullscreen: true
---

<div
class="hero-header"
style="
	background-image: url(http://localhost:4000/portfolio/2023/08/30/Custom-Install/hero-image.png);
	background-position: center;
	background-size: cover;
	border: solid 1px rgba(0,0,0,0.9);
	border-radius: 9px;
	height: 100%;
	margin-bottom: 30px;
	margin-left: auto;
	margin-right: auto;
	max-height: 30vh;
	max-width: 1200px;
	overflow: hidden;">
	<div
	id="hero-text"
	style="
	background: rgba(0,0,0,0.3);
	color: white;
	display: grid;
	height: 100%;
	left: 0;
	position: absolute;
	right: 0;
	text-align: center;
	z-index: 999;">
		<h1
		id="hero-title"
		style="
		align-self: end;
		font-size: 6vw;
		font-weight: 900;
		line-height: 100%;
		margin-bottom: 0;
		margin-top: 0;
		">
			Custom Install
		</h1>
		<span
		id="hero-byline"
		style="
		font-size: 2vw;">
			Redesigning installation
		</span>
	</div>

</div>

<div class="alert alert-yellow">
  <div class="alert-inner">
	<div class="alert-icon">
	  🏃‍♂️
	</div>
	<div class="alert-gutter"></div>
	<div class="alert-copy">
	  <span class="alert-copy-title">TL;DR</span>
	  <span class="alert-copy-body">I was the lead designer on redesigning the product installation experience at Autodesk. This article is about one part of that experience— the advanced install package generator.<br/><br/><b>Some fast facts:</b><ul><li>Lead the interaction design and research</li><li>Collaborated on the project planning, roadmapping, visual design, and frontend coding</li><li>Created and improved several user experience operational processes</li><li>Three months after launch >30,000 installation packages were created and >11,000 packages were modified </li><li>All success metrics for the project were met or exceeded</li></ul>This is a long-form write-up, and is about 3000 words in length. You can <a href="#The-new-installer-experience">skip to the design here.</a></span>
	</div>
  </div>
</div>

<div class="table-of-contents">
	<div class="table-of-contents-inner">
		<span class="table-of-contents-title">Table of contents</span>
		<ul id="table-of-contents-list">
			<li>
				<a href="#Context">Context</a>
				<ul>
					<li>
						<a href="#Introducing-CAL">Introducing CAL</a>
					</li>
					<li>
						<a href="#Installer-modification">Installer modification</a>
					</li>
					<li>
						<a href="#Siloing">Siloing</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="#Designing-a-platform">Designing a platform</a>
				<ul>
					<li>
						<a href="#Web-versus-desktop">Web versus desktop</a>
					</li>
					<li>
						<a href="#Looking-for-commonalities">Looking for commonalities</a>
					</li>
					<li>
						<a href="#Standardizing-customization">Standardizing customization</a>
					</li>
					<li>
						<a href="#Validating-design-decisions">Validating design decisions</a>
					</li>
					<ul>
						<li>
							<a href="#Customer-feedback-council">Customer feedback council</a>
						</li>
					</ul>
				</ul>
			</li>
			<li>
				<a href="#The-new-installer-experience">The new installer experience</a>
				<ul>
					<li>
						<a href="#Web-versus-desktop">Web versus desktop</a>
					</li>
					<li>
						<a href="#Looking-for-commonalities">Looking for commonalities</a>
					</li>
					<li>
						<a href="#Standardizing-customization">Standardizing customization</a>
					</li>
					<li>
						<a href="#Validating-design-decisions">Validating design decisions</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="#Beyond-release">Beyond release</a>
				<ul>
					<li>
						<a href="#Remote-updating-and-installation">Remote updating and installation</a>
					</li>
					<li>
						<a href="#Even-more-advanced-customization">Even more advanced customization</a>
					</li>
					<li>
						<a href="#Assignment-via-groups">Assignment via groups</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div>

## Context

Autodesk software has been available since the late 80's. Throughout that time, there have been many ways that installers were handled for each product, with product teams being responsible for coding and maintaining their own installers. Internally, this was known as the **Install Framework**.

Unlike other software you, the reader, may have in mind, Autodesk software is rarely ever installed in its vanilla state. Because of the large number of collaborators working on Autodesk files, there is an important need to ensure that everyone is using very specific versions of not only the overall application, but applets, plugins, and libraries to avoid any incompatibility (or corruption) of working files.

To help companies plan for these issues, Autodesk products (and their installers) are architected in such a way as to support a high degree of customization for a specialist (most commonly referred to as a CAD manager) who understands the operations of the team better than anyone else.

### Introducing CAL

As teams working with Autodesk software get larger, there tends to be a natural progression where an individual contributor on the team who best understands the Autodesk software will take on the role of the "CAD / BIM manager". These individuals start to think about the tooling of a project at a more advanced level, and are typically responsible for testing software, making operational decisions, and ensuring that everyone is able to work with the team's files without blockages.

And as the organization grows, software installation becomes more of a controlled process-- end users (designers, engineers, etc.) have their installation privileges either restricted or removed, and rely on the tools they need to be installed for them, preconfigured correctly so they can focus entirely on their task at hand.

### Installer modification

The methods by which one of these admins might customize their applications can vary greatly:

- Removing functionality in-application
- Restricting which version of an application can be used for a project
  - Sometimes there can even be multiple versions of the same application, with each particular version used for only a certain project
- Pre-installing libraries or plug-ins
- Customizing the in-app UI to company standards
- Localizing applications for international work

Historically, this was done individually for each application, leading to lots (thousands, in some cases) of versions of installers, with an individual installer for each application. And when a CAL was doing a clean install on a machine, they would need to daisy-chain all of those installers (and make sure they happened in the correct order, because, yes, that can cause issues too), and wait the 10's of hours it could take to complete a single machine's full suite installation.

### Silioing

To add some more complexity to this problem, it's important to keep in mind how Autodesk has historically grown its products suites. Autodesk is well known for acquiring products and folding them into their own lineup, often maintaining the teams that worked on the product as-is, and simply incorporating platform specific Autodesk functionality (licensing, support, etc.) into the product.

## Designing a platform

So, now you, my reader, have the same context I was given when I started this project (my first project at Autodesk, mind you). And because I was learning about how all of these legacy systems worked as well as my unfamiliarity with Autodesk's product offerings, I decided that my method would be one of rapid iteration with very tight feedback loops from all relevant stakeholders. Because I couldn't trust my own background knowledge of the situation, I had to rely on what I heard from others, both internally and externally.

### Web versus desktop

One of the first major decisions was where this new install experience should live. Historically, advanced installation configurations were done using the same installer application that came on a disk (or with later releases, was downloaded from the Autodesk Account portal).

This was a necessity for a very long time because unlike other software, Autodesk applications are _large_, in the tens of gigabytes for even a standard installation. By utilizing a desktop installer, it also meant that all the necessary bits to create the installer package were already on disk, and were simply a matter of modifying or removing those bits in order to shape the software the way you wanted it. These large installer applications and component libraries were all typically stored on corporate servers in the workspace, so the speed of installer creation was only limited by amount of modification that needed to be done.

A web experience, on the other hand, would necessitate that administrators would need to download very large versions of their applications before they could be shared out to their end users. This typically involved uploading installer packages to a shared corporate server and then running the installers remotely to machines that were in the office. But the web had several advantages that the desktop couldn't compete with:

- Because installers were dynamically created from the set of instructions from the web tool, it meant that administrators no longer needed to use up storage space on their own servers to maintain the multitude of huge installer files
- With the ability for multiple to access the cloud-stored installer configurations, third party and external administrators were able to create packages for less experienced companies and then simply share the correct configuration to their employers
- Desktop installer applications were only updated with every yearly release cycle of Autodesk products, meaning that they were left stagnant for long periods of time. By removing the installer creation from the product release cycle, we were able to rapidly iterate and push out updates faster than the products themselves were updated
- Because of the cross-platform nature of web applications, administrators were able to work remotely without having to be in the office _(which would come particularly in handy about three months into this project (🦠)_.

### Looking for commonalities

Until this project, product teams (Autodesk has around 100 individual products that they offer) were responsible for their own installer process, which meant that each team had over time built their own bespoke installation solution. Each installer followed its own paradigms, used its own codebase, and offered unique features for their end users to customize their application install.

One of the first issues I knew I would need to handle would be to how to get these product teams to all align on the vision I was putting together. I needed to balance each team's unique needs, while also being strict about setting limitations on the amount of customization that would be available to them. I wanted our customers to be able to go to a single location, and see a familiar set of controls in order to customize any product.

My starting approach was to basically look at each individual product's installers, and take notes on all of the fields that they had into one master spreadsheet. As I would do this, I would start to tag identical or very similar fields, and take note of what their purpose was. I would slowly start to organize the types of customizations into groupings and categories, and by the end I had a full list of every possible installer capability that was supported across all Autodesk products.

### Standardizing customization

Even with my newfound knowledge of all the potential ways that individual products could be customized, I knew that centralizing the maintenance of those customizations would not only be a large commitment of resources from our own team, but it would perpetually leave us having to back-and-forth with product teams, who might want to make necessary adjustments based off their own users's feedback or a new feature were were planning on releasing.

In order to handle this, I took an approach similar to that of a design system: we would provide the components for each installer's customizations, and product teams would be responsible for putting the components into an order that made sense for their product. So what we ended up with was:

| Delivery team responsiblities                                 | Product teams responsibilities                                                                 |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Create and maintain .XML parser                               | Read our documentation and create an .XML file that tells us what their customization UI needs |
| Create a set of React components to show in the UI            | QA and test that their customization UI is rendering properly                                  |
| Ensure the output of a user's input was interpreted correctly |                                                                                                |

### Validating design decisions

One of the biggest concerns I had with this drastic of a shift was the potential impact it would have on the administrators at all of the different companies that rely on Autodesk software. Obviously getting the internal product teams to align was a challenge in of itself, but if the final product that we delivered was worse than what we already had we would have spent a lot of resources and reorganized a lot of historically "good enough" systems for no reason other than to change them.

#### Customer feedback council

From this need came the Autodesk Software Deployment Delta Team, a group of around 30 administrators from a variety of company sizes that were all experts in Autodesk product installations (CAL's, as referred to earlier). Along with my research and product management collaborators, we would have a recurring monthly meeting with all of these customers to discuss what we were working on, and hold a workshop to gather feedback, concerns, and to pulse check on what were the top-of-mind issues these users were currently working through. I made a point in each subsequent meeting to reiterate what feedback I had heard in the previous month's session, and described what steps or decisions had ben made as a result of that feedback not only to keep the members of the council engaged, but to give ourselves an opportunity to improve our own interpretation skills of what our customers were trying to communicate to us.

## The new installer experience

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);display: block; margin-left: auto;margin-right: auto;" width="95%" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FcFZORlogdbhPrp6cevk5DL%2FUntitled%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DoJdOCS1FhZfGVeEJ-1" allowfullscreen></iframe>
<br/>
<div class="alert alert-default">
  <div class="alert-inner">
	<div class="alert-icon">
	  💻
	</div>
	<div class="alert-gutter"></div>
	<div class="alert-copy">
	  <span class="alert-copy-title">Demo available</span>
	  <span class="alert-copy-body">If you have an Autodesk ID, you can find the latest version of this tool at <a href="https://manage.autodesk.com/products/deployments">https://manage.autodesk.com/products/deployments</a></span>
	</div>
  </div>
</div>

## Beyond release

As anyone familiar with software development knows, there are always blue-sky features that aren't able to make the timeline originally agreed upon. While the released version of Custom Install was still very much a complete project, I feel it would be selling it short to not give a sense of what the full vision was, and what may eventually still be developed.

### Remote updating and installation

While moving the tool to a web environment solved several of the shortcomings of the older desktop installer, one of the limitations of a web tool was that we lost our direct connection to seeing what is happening on any individual's machine.

The Autodesk Desktop Application (ADA) is another application that Autodesk offered to help individual end-users keep their Autodesk software up-to-date. The proposed integration to the Custom Install tool was to allow administrators to "publish" packages from the webtool, and specify which end-user's machines the software should be installed on. At that point, all that the administrator would need to do is ensure all of the machines they're responsible for have ADA installed and they would be able to remotely push software package installs to any machine, and have it self-report on its status, enable/disable automatic updating of that software, and a variety of other features.

<div class="alert alert-default">
  <div class="alert-inner">
	<div class="alert-icon">
	  ✍️
	</div>
	<div class="alert-gutter"></div>
	<div class="alert-copy">
	  <span class="alert-copy-title">Author's note</span>
	  <span class="alert-copy-body">There is a separate write-up coming for the redseigned version of the Autodesk Desktop Application that I worked on following this project.</span>
	</div>
  </div>
</div>

### Even more advanced customization

An important consideration of the technical implementation of the packages the Custom Install tool created was that we still leave the customized packages editable even when downloaded onto the admin's machine. This is possible because the installer's customization is written to a simple .INI file that is available within installer package.

While we were able to account for the vast majority of customization, there would always be those that were either more familiar or would want greater flexibility to customize their packages, so an early feature suggestion for the Custom Install tool was to allow admins to edit the .INI file directly in the browser, making it easier to pass highly customized packages around to their team (versus having to download, edit, and then manually reshare).

### Assignment via groups

<div class="alert alert-default">
  <div class="alert-inner">
	<div class="alert-icon">
	  ✍️
	</div>
	<div class="alert-gutter"></div>
	<div class="alert-copy">
	  <span class="alert-copy-title">Author's note</span>
	  <span class="alert-copy-body">This only covers one aspect of the totality of this project, but I wanted to share this out while I work on the next write-up. Stick around for part 2!</span>
	</div>
  </div>
</div>
