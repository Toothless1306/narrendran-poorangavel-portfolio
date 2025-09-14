import React, { useState, useEffect } from 'react';
import './index.css';

const Portfolio = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [darkMode, setDarkMode] = useState(true);

	useEffect(() => {
		setIsVisible(true);

		// Add class to body for proper dark mode styling
		if (darkMode) {
			document.body.classList.add('dark-mode');
		} else {
			document.body.classList.remove('dark-mode');
		}

		// Scroll animation handling
		const handleScroll = () => {
			const elements = document.querySelectorAll('.fade-in');
			elements.forEach((el) => {
				const elementTop = el.getBoundingClientRect().top;
				const elementVisible = 150;
				if (elementTop < window.innerHeight - elementVisible) {
					el.classList.add('active');
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial check

		return () => window.removeEventListener('scroll', handleScroll);
	}, [darkMode]);

	useEffect(() => {
		// Add class to body when darkMode changes
		if (darkMode) {
			document.body.classList.add('dark-mode');
		} else {
			document.body.classList.remove('dark-mode');
		}
	}, [darkMode]);

	const toggleTheme = () => {
		setDarkMode(!darkMode);
	};

	const openGoogleMaps = () => {
		window.open(
			'https://www.google.com/maps/place/Dindigul,+Tamil+Nadu/',
			'_blank'
		);
	};

	const skills = {
		Frontend: ['JavaScript', 'ReactJS', 'HTML/CSS'],
		Backend: ['Node.js', 'Python'],
		Database: ['SQL', 'MongoDB'],
	};

	const languages = [
		{ name: 'Tamil', proficiency: 'Native' },
		{ name: 'English', proficiency: 'Professional' },
		{ name: 'Hindi', proficiency: 'Basic' },
	];

	// Certificate data with Google Drive links
	const certifications = [
		{
			title: 'HTML-5 The Language',
			year: '2020',
			link: 'https://drive.google.com/file/d/1_MD62UtKbR8rQsQRhxj0kXctPwt-nMSZ/view?usp=sharing',
		},
		{
			title: 'Network Engineering Cisco',
			year: '2019',
			link: 'https://drive.google.com/file/d/10wxsK-hFYHHy6R9qcRyvHOkV9nzJ0rV7/view?usp=sharing',
		},
		{
			title: 'Node.js - Infosys Springboard',
			year: '2022',
			link: 'https://drive.google.com/file/d/1e2_hjRo5eKUOz8CsLSYge9QIOw_u1AGX/view?usp=sharing',
		},
		{
			title: 'Angular - Infosys Springboard',
			year: '2022',
			link: 'https://drive.google.com/file/d/1ouai83OuIsdGg-hlxp5UR18V70kYyK1-/view?usp=sharing',
		},
		{
			title: 'MongoDB Essentials - Infosys Springboard',
			year: '2022',
			link: 'https://drive.google.com/file/d/1swAOvqoS30G1wRx6_zmKBaHNdm4g-pXm/view?usp=sharing',
		},
	];

	const openCertificate = (link) => {
		window.open(link, '_blank');
	};

	return (
		<div
			className={`portfolio-container ${isVisible ? 'visible' : ''} ${
				darkMode ? 'dark-mode' : 'light-mode'
			}`}>
			{/* <button
				className='theme-toggle'
				onClick={toggleTheme}>
				{darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
			</button> */}

			<header className='portfolio-header'>
				<div className='header-top'>
					<div className='header-name-title'>
						<h1 className='portfolio-name'>Narrendran Poorangavel</h1>
						<p className='portfolio-title'>Full Stack Developer</p>
					</div>
					<div className='logo'>
						<span>NP</span>
					</div>
				</div>
				<div className='contact-info'>
					{/* Email */}
					<div className='contact-item'>
						<i className='fas fa-envelope'></i>
						<span>
							<a
								href='mailto:narrendranpoorangavel@gmail.com'
								target='_blank'
								rel='noopener noreferrer'
								className='contact-link'>
								narrendranpoorangavel@gmail.com
							</a>
						</span>
					</div>

					{/* Phone */}
					<div className='contact-item'>
						<i className='fas fa-phone-alt'></i>
						<span>+91 7868843874</span>
					</div>

					{/* Location */}
					<div
						className='contact-item location-item'
						onClick={openGoogleMaps}>
						<i className='fas fa-map-marker-alt'></i>
						<span className='location-text'>Dindigul, India</span>
						<span className='location-hint'>(View on Maps)</span>
					</div>

					{/* LinkedIn */}
					<div className='contact-item'>
						<i className='fab fa-linkedin-in'></i>
						<span>
							<a
								href='https://www.linkedin.com/in/narrendran-p-0400b621a'
								target='_blank'
								rel='noopener noreferrer'
								className='contact-link'>
								LinkedIn Profile
							</a>
						</span>
					</div>

					{/* GitHub */}
					<div className='contact-item'>
						<i className='fab fa-github'></i>
						<span>
							<a
								href='https://github.com/Toothless1306'
								target='_blank'
								rel='noopener noreferrer'
								className='contact-link'>
								GitHub Profile
							</a>
						</span>
					</div>
				</div>
			</header>

			<div className='portfolio-content'>
				<div className='content-left'>
					<section className='portfolio-section fade-in'>
						<h2 className='section-title'>Professional Summary</h2>
						<div className='section-content'>
							<p>
								Full Stack Developer with experience in end-to-end application
								development using the MERN stack and Zoho technologies.
							</p>
							<ul>
								<li>
									Skilled in building efficient and logical web applications.
								</li>
								<li>
									Proficient in designing and implementing full-stack solutions.
								</li>
								<li>
									A collaborative team member focused on writing clean code and
									contributing to project success.
								</li>
							</ul>
						</div>
					</section>

					<section className='portfolio-section fade-in'>
						<h2 className='section-title'>Work Experience</h2>
						<div className='section-content'>
							{/* Zoho Experience - Added this section */}
							<div className='timeline-item'>
								<div className='timeline-header'>
									<h3 className='item-title'>Zoho Developer</h3>
									<p className='item-date'>March 2024 - July 2024</p>
								</div>
								<p className='item-subtitle'>Elite Tech Park</p>
								<ul>
									<li>
										Lead development of web applications using Zoho
										technologies.
									</li>
									<li>
										Managed a team of 5 developers in implementing project
										requirements.
									</li>
									<li>
										Implemented agile methodologies to improve team productivity
										by 30%.
									</li>
									<li>
										Developed custom solutions and integrations within the Zoho
										ecosystem.
									</li>
								</ul>
							</div>

							{/* GwayERP Experience */}
							<div className='timeline-item'>
								<div className='timeline-header'>
									<h3 className='item-title'>Junior Engineer (Full Stack)</h3>
									<p className='item-date'>December 2024 - September 2025</p>
								</div>
								<p className='item-subtitle'>
									<a
										href='https://www.gwayerp.com'
										target='_blank'
										rel='noopener noreferrer'
										className='company-link'>
										GwayERP Tech Solutions
									</a>
								</p>
								<ul>
									<li>
										Developed and maintained full-stack web applications for the
										company's ERP products using the MERN stack.
									</li>
									<li>
										Built RESTful APIs, designed database schemas, and created
										responsive user interfaces.
									</li>
									<li>
										Collaborated with a development team to deliver features in
										an Agile environment.
									</li>
									<li>
										Gained experience in end-to-end application development and
										logical problem-solving.
									</li>
								</ul>
							</div>
						</div>
					</section>

					<section className='portfolio-section fade-in'>
						<h2 className='section-title'>Education</h2>
						<div className='section-content'>
							<div className='timeline-item'>
								<div className='timeline-header'>
									<h3 className='item-title'>B.Tech, Information Technology</h3>
									<p className='item-date'>2020 - 2024</p>
								</div>
								<p className='item-subtitle'>
									<a
										href='https://karpagamtech.ac.in/'
										target='_blank'
										rel='noopener noreferrer'
										className='company-link'>
										Karpagam Institute of Technology
									</a>
								</p>
								<ul>
									<li>
										Specialized in Software Engineering. Graduated with honors.
									</li>
									<li>
										Relevant Coursework: Algorithms, Data Structures, Web
										Development.
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>

				<div className='content-right'>
					<section className='portfolio-section fade-in'>
						<h2 className='section-title'>Technical Skills</h2>
						<div className='section-content'>
							<div className='skills-container'>
								{Object.entries(skills).map(([category, skillList]) => (
									<div
										className='skill-category'
										key={category}>
										<h4>{category}</h4>
										<div className='skill-group'>
											{skillList.map((skill) => (
												<div
													className='skill'
													key={skill}>
													{skill}
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</section>

					<section className='portfolio-section fade-in'>
						<h2 className='section-title'>Languages</h2>
						<div className='section-content'>
							{languages.map((lang) => (
								<div
									className='language-item'
									key={lang.name}>
									<span className='language-name'>{lang.name}</span>
									<span className='language-proficiency'>
										{lang.proficiency}
									</span>
								</div>
							))}
						</div>
					</section>

					<section className='portfolio-section fade-in'>
						<h2 className='section-title'>Certifications</h2>
						<div className='section-content'>
							{certifications.map((cert) => (
								<div
									className='certification-item'
									key={cert.title}
									onClick={() => openCertificate(cert.link)}>
									<h4>{cert.title}</h4>
									<span className='cert-date'>{cert.year}</span>
									<span className='cert-link-hint'>Click to view</span>
								</div>
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
