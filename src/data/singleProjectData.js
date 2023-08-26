import ALCThumbnail from '../images/projects/static-website/abc-learning-center/alc-thumbnail.jpg';
import ALCImage1 from '../images/projects/static-website/abc-learning-center/alc-adminList.png';
import ALCImage2 from '../images/projects/static-website/abc-learning-center/alc-adminEdit.png';
import ALCImage3 from '../images/projects/static-website/abc-learning-center/alc-informationArchitecture.jpg';
import ALCImage4 from '../images/projects/static-website/abc-learning-center/alc-registrationBP.png';
import ALCImage5 from '../images/projects/static-website/abc-learning-center/alc-adminWireframe.jpg';
import ALCImage6 from '../images/projects/static-website/abc-learning-center/alc-storyboard.jpg';

import HFCThumbnail from '../images/projects/web-application/hifi-cars/hfc-thumbnail.png';
import HFCShowcase from '../videos/projects/web-application/hifi-cars/hfc-showcase.mp4';
import HFCImage1 from '../images/projects/web-application/hifi-cars/hfc-login.png';
import HFCImage2 from '../images/projects/web-application/hifi-cars/hfc-signup.png';
import HFCImage3 from '../images/projects/web-application/hifi-cars/hfc-auction.png';
import HFCImage4 from '../images/projects/web-application/hifi-cars/hfc-carDetails.png';
import HFCImage5 from '../images/projects/web-application/hifi-cars/hfc-placeBid.png';
import HFCImage6 from '../images/projects/web-application/hifi-cars/hfc-adminListing.png';

import KYNThumbnail from '../images/projects/web-application/know-your-neighborhood/kyn-thumbnail.jpeg';
import KYNShowcase from '../videos/projects/web-application/know-your-neighborhood/kyn-showcase.mp4';
import KYNImage1 from '../images/projects/web-application/know-your-neighborhood/kyn-register.jpeg';
import KYNImage2 from '../images/projects/web-application/know-your-neighborhood/kyn-login.jpeg';
import KYNImage3 from '../images/projects/web-application/know-your-neighborhood/kyn-googleLogin.jpeg';
import KYNImage4 from '../images/projects/web-application/know-your-neighborhood/kyn-stores.jpeg';
import KYNImage5 from '../images/projects/web-application/know-your-neighborhood/kyn-profile.jpeg';
import KYNImage6 from '../images/projects/web-application/know-your-neighborhood/kyn-contact.jpeg';

export const singleProjectData = [
	{
		id: 1,
		ProjectHeader: {
			title: 'ABC Learning Center',
			timeline: '11 Oct - 1 Nov 2022',
			category: 'Static Website',
			summary: 'A website for an IT Training Institute with Lead Administration System using HTML, CSS and JQuery',
			thumbnail: ALCThumbnail,
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Lead Administration Page',
				img: ALCImage1,
			},
			{
				id: 2,
				title: 'Edit Lead Form',
				img: ALCImage2,
			},
			{
				id: 3,
				title: 'Information Architecture',
				img: ALCImage3,
			},
			{
				id: 4,
				title: 'Business Process for Lead Registration',
				img: ALCImage4,
			},
			{
				id: 5,
				title: 'Wireframe for Administration',
				img: ALCImage5,
			},
			{
				id: 6,
				title: 'Storyboard (Not Included Administration)',
				img: ALCImage6,
			},
		],
		ProjectInfo: {
			AboutHeading: 'About This Project',
			AboutDetails:
				[
					{
						id: 1,
						paragraph:
							"This project involves crafting a static website for an IT Training Institute, coupled with a Lead Administration System. The website, developed using HTML, CSS, and JavaScript, integrates JQueryUI components such as Tabs, Accordion, Datepicker, Dialog, and Tooltip.",
					},
					{
						id: 2,
						paragraph:
							"The primary aim is to create a user-friendly website named 'ABC Learning Center' that dispenses course information and captures leads via a Lead Generation Form. A corresponding administration system empowers the center to effectively manage leads—enabling the listing, searching, adding, editing, and deleting of lead records.",
					},
					{
						id: 3,
						paragraph:
							"The project's development phase included constructing Information Architecture, wireframes, storyboards, and business process diagrams, while the process was documented through the website requirements specification and user guide. Rigorous usability, functional, and cross-browser testing validated both design compliance and interface effectiveness.",
					},
				],
			ObjectivesHeading: 'Objectives',
			ObjectivesDetails:
				[
					{
						id: 1,
						point:
							"- Develop a static website with Lead Administration System for 'ABC Learning Center'",
					},
					{
						id: 2,
						point:
							"- Utilize HTML, CSS, JavaScript, and integrate JQueryUI components",
					},
					{
						id: 3,
						point:
							"- Execute test cases and validate the website meets the design requirements",
					},
					{
						id: 4,
						point:
							"- Generate a comprehensive website requirements specification and user guide documents",
					},
				],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						{
							id: 1,
							tech: 'HTML',
						},
						{
							id: 2,
							tech: 'CSS',
						},
						{
							id: 3,
							tech: 'JavaScript',
						},
						{
							id: 4,
							tech: 'JQuery',
						},
						{
							id: 5,
							tech: 'JQueryUI',
						},
					],
				},
			],
			GithubLink: 'https://github.com/sycDev/fed-project',
			DemoLink: 'https://sycdev.github.io/fed-project',
		},
	},
	{
		id: 2,
		ProjectHeader: {
			title: 'Hi-Fi Cars',
			timeline: '27 Jun - 03 Jul 2023',
			category: 'Web Application',
			summary: 'A used car sales portal with bidding system which back-end built with Spring Boot and use JSP for front-end',
			thumbnail: HFCThumbnail,
		},
		ProjectShowcase: HFCShowcase,
		ProjectImages: [
			{
				id: 1,
				title: 'Login Page',
				img: HFCImage1,
			},
			{
				id: 2,
				title: 'Sign Up Page',
				img: HFCImage2,
			},
			{
				id: 3,
				title: 'Auction Page',
				img: HFCImage3,
			},
			{
				id: 4,
				title: 'Car Details Page',
				img: HFCImage4,
			},
			{
				id: 5,
				title: 'Placing Bid',
				img: HFCImage5,
			},
			{
				id: 6,
				title: 'Listing Data Administration Page',
				img: HFCImage6,
			},
		],
		ProjectInfo: {
			AboutHeading: 'About This Project',
			AboutDetails:
				[
					{
						id: 1,
						paragraph:
							"This project involves the development of a full-stack web application using Spring Boot for the backend and JSP for the frontend. The application functions as a used car sales portal, featuring a distinctive car auction platform that enables customers to bid on used cars.",
					},
					{
						id: 2,
						paragraph:
							"Additionally, an administration system has been developed to streamline the management of user accounts, car listings, and bidding data. As the project has a demanding one-week deadline, so only essential features like car posting, bidding, and administration have been implemented. I find this project interesting because I have numerous ideas to brainstorm additional features that could be developed or improved.",
					},
				],
			ObjectivesHeading: 'Objectives',
			ObjectivesDetails:
				[
					{
						id: 1,
						point:
							"- Create a used car sales portal with a car auction feature for bidding",
					},
					{
						id: 2,
						point:
							"- Enhance technical skills in Spring Boot and JSP",
					},
					{
						id: 3,
						point:
							"- Improve problem-solving abilities within real-world development scenarios",
					},
				],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						{
							id: 1,
							tech: 'Spring Boot',
						},
						{
							id: 2,
							tech: 'JSP',
						},
						{
							id: 3,
							tech: 'CSS',
						},
						{
							id: 4,
							tech: 'JavaScript',
						},
						{
							id: 5,
							tech: 'JQuery',
						},
						{
							id: 6,
							tech: 'Bootstrap',
						},
					],
				},
			],
			GithubLink: 'https://github.com/sycDev/hifi-used-car',
		},
	},
	{
		id: 3,
		ProjectHeader: {
			title: 'Know-Your-Neighborhood',
			timeline: '26 Jul - 02 Aug 2023',
			category: 'Web Application',
			summary: 'An online grocery stores locator with store management system which React front-end integrated with Spring Boot REST API',
			thumbnail: KYNThumbnail,
		},
		ProjectShowcase: KYNShowcase,
		ProjectImages: [
			{
				id: 1,
				title: 'Registration Page',
				img: KYNImage1,
			},
			{
				id: 2,
				title: 'Login Page',
				img: KYNImage2,
			},
			{
				id: 3,
				title: 'Google Login',
				img: KYNImage3,
			},
			{
				id: 4,
				title: 'Stores Page',
				img: KYNImage4,
			},
			{
				id: 5,
				title: 'User Profile Page',
				img: KYNImage5,
			},
			{
				id: 6,
				title: 'Contact Us Page',
				img: KYNImage6,
			},
		],
		ProjectInfo: {
			AboutHeading: 'About This Project',
			AboutDetails:
				[
					{
						id: 1,
						paragraph:
							"This project is a web application for a grocery store locator with an integrated store management system. Utilizing a front-end and back-end separation, I've built the front end using React, while the back end is developed using Spring Boot, and RESTful APIs are accessed through Axios. ",
					},
					{
						id: 2,
						paragraph:
							"The project is currently halfway through development due to a tight timeline. Notably, the application already incorporates key features, including the ability to send messages to a Slack channel via an incoming webhook, user registration through social or local accounts, authentication and authorization, viewing the store list, and performing basic CRUD operations (add, edit, delete) for store records. However, the search functionality is still in progress. Only admin users are granted the permission to delete stores.",
					},
					{
						id: 3,
						paragraph:
							"Additionally, I've expanded my skill set by learning how to create sequence diagrams and high-level diagrams. These drawings have been incredibly helpful in making the complicated OAuth2 integration process easier to understand. They show me, step by step, how different parts work together and give me a big picture of how information moves around. This way of using pictures has really helped me better understand and explain the detailed parts of how OAuth2 works in this project.",
					},
				],
			ObjectivesHeading: 'Objectives',
			ObjectivesDetails:
				[
					{
						id: 1,
						point:
							"- Construct a web application for locating grocery stores with an integrated store management system",
					},
					{
						id: 2,
						point:
							"- Gain practical experience in building front-end and back-end separated applications, RESTful API integration, and user authentication",
					},
					{
						id: 3,
						point:
							"- Focus on learning the integration of OAuth2 APIs for social logins to facilitate authorized operations in store management",
					},
				],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						{
							id: 1,
							tech: 'React',
						},
						{
							id: 2,
							tech: 'Spring Boot',
						},
						{
							id: 3,
							tech: 'RESTful API',
						},
						{
							id: 4,
							tech: 'Axios',
						},
						{
							id: 5,
							tech: 'OAuth2 API',
						},
						{
							id: 6,
							tech: 'Webhook',
						},
						{
							id: 7,
							tech: 'CSS',
						},
						{
							id: 8,
							tech: 'MySQL',
						},
					],
				},
			],
			GithubLink: 'https://github.com/sycDev/reactjs-springboot-know-your-neighborhood',
		},
	},
];
