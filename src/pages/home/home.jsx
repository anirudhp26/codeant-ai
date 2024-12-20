import React from "react";
import repositories from "../../data/repositories.json";
import "./home.css";
import Select from "react-select";
import sidebaritems from "../../data/sidebarItems.json";
export default function Home() {
    const [filteredRepositories, setFilteredRepositories] = React.useState(repositories);
	const options = [
		{ value: "anirudhp", label: "Anirudh Patel" },
		{ value: "meet", label: "Meet Patel" },
		{ value: "arth", label: "Arth Patel" },
	];
	const footerItems = [
		{
			id: 5,
			danger: false,
			icon_path: "./phone.png",
			title: "Support",
		},
		{
			id: 6,
			danger: true,
			icon_path: "./sign-out.png",
			title: "Logout",
		},
	];

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredRepositories = repositories.filter((repo) =>
            repo.name.toLowerCase().includes(searchTerm)
        );
        setFilteredRepositories(filteredRepositories);
    }

	const [activePage, setActivePage] = React.useState(sidebaritems[0].id);
	return (
		<div className="home-root">
			<div className="home-sidebar">
				<div className="sidebar-header">
					<span className="sidebar-logo">
						<img src="./logo.png" alt="" />
					</span>
					<p className="text-large">CodeAnt AI</p>
				</div>
                <div className="sidebar-select">
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={options[0]}
                        isSearchable={true}
                        name="color"
                        options={options}
                        styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderRadius: ".5rem",
                            }),
                        }}
                    />
                </div>
				<div className="sidebar-content">
					{sidebaritems.map((item) => (
						<div
							key={item.id}
							className={
								"sidebar-item " +
								(activePage === item.id ? "active" : "")
							}
							onClick={() => setActivePage(item.id)}
						>
							<img src={item.icon_path} alt="" />
							<p
								style={{
									color: activePage === item.id && "#fff",
								}}
							>
								{item.title}
							</p>
						</div>
					))}
				</div>
				<div className="sidebar-footer">
					{footerItems.map((item) => (
						<div
							key={item.id}
							className={
								"sidebar-item " +
								(activePage === item.id ? "active" : "")
							}
							onClick={() => setActivePage(item.id)}
						>
							<img src={item.icon_path} alt="" />
							<p
								style={{
									color: activePage === item.id && "#fff",
								}}
							>
								{item.title}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className="home-body">
				<div className="repo-container">
					<div className="repo-header">
						<div className="header-info">
							<p className="main text-bold">Repositories</p>
							<p className="header-stats">
								{repositories.length} total repositories
							</p>
						</div>
						<div className="header-buttons">
							<button className="header-button">
								<img src="./refresh.png" alt="" />
								Refresh All
							</button>
							<button className="active header-button">
								<img src="./plus.png" alt="" />
								Add Repository
							</button>
						</div>
					</div>
					<div className="search-bar">
						<img src="./search.png" alt="" />
						<input type="text" placeholder="Search"
                            onChange={handleSearch}
                        />
					</div>
					<div className="repo-list">
						{filteredRepositories.map((repo, index) => (
							<div key={index} className="repo-card">
								<p className="repo-name">
									{repo.name}
									<span className="privacy-area">
										{repo.privacy}
									</span>
								</p>
								<div className="repo-info-container">
									<p className="repo-info">
										{repo.mainLanguage}
										<img src="./ellipse.png" alt="" />
									</p>
									<p className="repo-info">
										<img src="./database.png" alt="" />
										{repo.size}
									</p>
									<p className="repo-info">
										{(() => {
											const lastUpdated = new Date(
												repo.last_updated * 1000
											);
											const now = new Date();
											const diffTime = Math.abs(
												now - lastUpdated
											);
											const diffHours = Math.ceil(
												diffTime / (1000 * 60 * 60)
											);
											const diffDays = Math.ceil(
												diffTime / (1000 * 60 * 60 * 24)
											);
											if (diffHours < 24) {
												return `Updated ${diffHours} ${
													diffHours > 1
														? "hours"
														: "hour"
												} ago`;
											} else if (diffHours <= 1) {
												return `Updated less than hour ago>`;
											} else {
												return `Updated ${diffDays} ${
													diffDays > 1
														? "days"
														: "day"
												} ago`;
											}
										})()}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
