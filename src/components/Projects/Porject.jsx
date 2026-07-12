import React, { useEffect, useState } from 'react'
import './Project.css'

const projects = [
	{
		title: 'Society Management System',
		desc: 'Residential society platform for booking services, lodging complaints, and tracking requests with a polished admin experience.',
		github: 'https://github.com/ashmuley/Society-Management',
		demo: 'https://society-management-delta.vercel.app/',
		tech: ['MERN', 'JWT', 'React'],
		preview: 'society',
		accent: '#31d0ff'
	},
	{
		title: 'AgriSense AI',
		desc: 'AI-powered crop disease detection from leaf images with contextual recommendations for farmers and growers.',
		github: 'https://github.com/ashmuley/Leaf-Disease-Detection',
		demo: '',
		tech: ['Python', 'React', 'ML'],
		preview: 'ai',
		accent: '#7c5cff'
	},
	{
		title: 'Donor Connect',
		desc: 'Fast donor discovery experience that helps patients connect with blood and plasma support in real time.',
		github: '',
		demo: '',
		tech: ['React', 'Node', 'MongoDB'],
		preview: 'donor',
		accent: '#ff5bd1'
	},
	{
		title: 'Sales Data Analysis Dashboard',
		desc: 'Executive dashboard presenting revenue, profit, regional trends, and mission-critical KPI visualizations.',
		github: '',
		demo: '',
		tech: ['Power BI', 'Data Viz'],
		preview: 'dashboard',
		accent: '#22e1b2'
	}
]

const renderPreview = (type) => {
	switch (type) {
		case 'ai':
			return (
				<div className="preview-surface ai">
					<div className="preview-toolbar" />
					<div className="leaf-scan">
						<div className="leaf-ring" />
						<div className="leaf-core" />
					</div>
					<div className="ai-metrics">
						<span />
						<span />
						<span />
					</div>
				</div>
			)
		case 'donor':
			return (
				<div className="preview-surface donor">
					<div className="donor-card donor-main" />
					<div className="donor-card donor-side" />
					<div className="donor-card donor-side-alt" />
				</div>
			)
		case 'dashboard':
			return (
				<div className="preview-surface dashboard">
					<div className="chart-bars">
						<span />
						<span />
						<span />
						<span />
					</div>
					<div className="chart-line" />
				</div>
			)
		default:
			return (
				<div className="preview-surface society">
					<div className="preview-toolbar" />
					<div className="society-grid">
						<div className="society-panel large" />
						<div className="society-panel small" />
						<div className="society-panel small" />
					</div>
				</div>
			)
	}
}

export default function Projects() {
	const [active, setActive] = useState(0)

	useEffect(() => {
		const onKey = (e) => {
			if (e.key === 'ArrowRight') setActive((i) => (i + 1) % projects.length)
			if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + projects.length) % projects.length)
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [])

	const prev = () => setActive((i) => (i - 1 + projects.length) % projects.length)
	const next = () => setActive((i) => (i + 1) % projects.length)

	return (
		<section className="projects-section">
			<div className="projects-shell">
				<aside className="projects-intro">
					<div className="intro-badge">PROJECTS / 04</div>
					<h2 className="projects-title">Futuristic product launches, reimagined.</h2>
					<p className="projects-sub">
						A collection of product-led builds spanning AI, automation, and immersive full-stack experiences.
					</p>
					<div className="scroll-hint">
						<span className="hint-line" />
						<span>Use the arrows to rotate through the showcase</span>
					</div>
				</aside>

				<div className="projects-stage">
					<div className="dna-helix" aria-hidden>
						<div className="dna-core" />
						<span className="dna-ring ring-one" />
						<span className="dna-ring ring-two" />
						<span className="dna-ring ring-three" />
						<span className="dna-ring ring-four" />
						<span className="dna-particle particle-a" />
						<span className="dna-particle particle-b" />
						<span className="dna-particle particle-c" />
					</div>

					<div className="project-stack">
						{projects.map((project, index) => {
							const offset = index - active
							const normalized = Math.max(-2, Math.min(2, offset))
							const angle = normalized * 72
							const translateX = Math.sin((angle * Math.PI) / 180) * 300
							const translateY = normalized * 100
							const rotate = normalized * 18
							const scale = normalized === 0 ? 1 : 0.84 - Math.abs(normalized) * 0.07
							const opacity = normalized === 0 ? 1 : 0.56 - Math.abs(normalized) * 0.12
							const zIndex = 10 - Math.abs(normalized)

							return (
								<article
									key={project.title}
									className={`project-card ${index === active ? 'active' : ''}`}
									style={{
										'--tx': `${translateX}px`,
										'--ty': `${translateY}px`,
										'--rotate': `${rotate}deg`,
										'--scale': scale,
										'--opacity': opacity,
										'--z': zIndex,
										'--accent': project.accent
									}}
								>
									<div className="card-glow" />
									<div className="card-top">
										<div className="card-index">0{index + 1}</div>
										<div className="card-badge">{project.preview}</div>
									</div>
									<div className="card-body">
										<div className="card-copy">
											<h3>{project.title}</h3>
											<p>{project.desc}</p>
											<div className="card-tags">
												{project.tech.map((tag) => (
													<span key={tag}>{tag}</span>
												))}
											</div>
										</div>
										<div className="card-preview">{renderPreview(project.preview)}</div>
									</div>
									<div className="card-footer">
										<div className="card-links">
											{project.github && (
												<a href={project.github} target="_blank" rel="noreferrer">
													GitHub
												</a>
											)}
											{project.demo && (
												<a href={project.demo} target="_blank" rel="noreferrer" className="ghost">
													Live
												</a>
											)}
										</div>
									</div>
								</article>
							)
						})}
					</div>

					<div className="stage-controls">
						<button className="ctrl" onClick={prev} aria-label="Previous">
							←
						</button>
						<button className="ctrl" onClick={next} aria-label="Next">
							→
						</button>
					</div>
				</div>

				<aside className="projects-progress">
					{projects.map((project, index) => (
						<div key={project.title} className={`progress-item ${index === active ? 'active' : index < active ? 'done' : ''}`}>
							<span className="progress-num">0{index + 1}</span>
							<span className="progress-dot" />
						</div>
					))}
				</aside>
			</div>
		</section>
	)
}

