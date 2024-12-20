import React from "react";
import "./login.css";
import buttons from "../../data/socialButtons.json"
export default function Login() {
  console.log(buttons)
  const [selectedButton, setSelectedButton] = React.useState("saas");
	const featureCardContents = [
		{
			value: 30,
			text: "Language Support",
		},
		{
			value: 10000,
			text: "Developers",
		},
		{
			value: 100000,
			text: "Language",
		},
	];
  const handleSelectorChange = (change) => {
    if (change === "saas") {
      setSelectedButton("saas");
    } else {
      setSelectedButton("self");
    }
  }
	return (
		<div className="login-root">
			<div className="lr-sec-1">
				<div className="lr-feature-card">
					<div className="feature-card-sec-1">
						<span className="logo-icon">
							<img src="./logo.png" alt="" />
						</span>
						<p className="bold">AI to Detect & Autofix Bad Code</p>
					</div>
					<div className="feature-card-sec-2">
						{featureCardContents.map((feature, index) => (
							<div key={index} className="feature-card-content">
								<p className="text-bold">
									{feature.value > 1000
										? `${(feature.value / 1000).toFixed(
												1
										  )}k`
										: feature.value}+
								</p>
								<p className="text-dark">{feature.text}</p>
							</div>
						))}
					</div>
				</div>
				<div className="lr-stats-card">
					<div className="stats-card-sec-1">
            <svg
							width="25"
							height="25"
							viewBox="0 0 25 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M22.4336 12.755H12.6555V2.84301C12.6555 2.72105 12.5571 2.62127 12.4368 2.62127H11.7258C10.2911 2.61978 8.87012 2.90549 7.54453 3.46201C6.21895 4.01853 5.01482 4.83489 4.00122 5.86427C3.00327 6.87275 2.2083 8.06834 1.6606 9.38445C1.09185 10.7509 0.802002 12.2006 0.802002 13.6974C0.802002 15.1941 1.09185 16.641 1.6606 18.0075C2.21021 19.3241 2.99771 20.5104 4.00122 21.5277C5.00474 22.5449 6.17231 23.3432 7.47388 23.9003C8.81957 24.4791 10.2668 24.776 11.7286 24.7735C13.1633 24.7749 14.5843 24.4892 15.9099 23.9327C17.2354 23.3762 18.4396 22.5598 19.4532 21.5305C20.4567 20.5132 21.2442 19.3297 21.7938 18.0103C22.3647 16.6462 22.6577 15.1792 22.6551 13.6974V12.9767C22.6524 12.8547 22.554 12.755 22.4336 12.755ZM24.8372 11.2166L24.7661 10.435C24.5336 7.88491 23.418 5.47899 21.6188 3.66346C19.8213 1.84285 17.4525 0.716302 14.9223 0.47867L14.1485 0.406604C14.02 0.395516 13.9106 0.495301 13.9106 0.625575V11.261C13.9106 11.3829 14.009 11.4827 14.1293 11.4827L24.6184 11.455C24.7469 11.4522 24.8481 11.3441 24.8372 11.2166Z"
								fill="#9D90FA"
							/>
						</svg>
						<div className="stats-card-subsec">
              <span className="text-bold text-blue">
                <svg
                  height="800px"
                  width="800px"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 512 512"
                >
                  <path
                    style={{ fill: "#9D90FA" }}
                    d="M156.092,156.092l76.636-76.634v409.27C232.727,501.58,243.147,512,256,512
                    c12.853,0,23.273-10.42,23.273-23.273V79.458l76.636,76.634c4.543,4.546,10.499,6.817,16.455,6.817
                    c5.956,0,11.913-2.271,16.455-6.817c9.089-9.089,9.089-23.824,0-32.912L272.46,6.82c-0.545-0.545-1.117-1.058-1.713-1.547
                    c-0.261-0.216-0.538-0.402-0.807-0.604c-0.34-0.254-0.67-0.515-1.021-0.751c-0.327-0.219-0.667-0.408-1.001-0.608
                    c-0.316-0.189-0.625-0.388-0.953-0.562c-0.343-0.183-0.694-0.338-1.046-0.504c-0.338-0.16-0.67-0.329-1.016-0.472
                    c-0.341-0.141-0.689-0.256-1.035-0.379c-0.369-0.133-0.737-0.276-1.116-0.389c-0.346-0.104-0.694-0.18-1.043-0.268
                    c-0.388-0.098-0.771-0.206-1.167-0.285c-0.399-0.079-0.802-0.126-1.202-0.183c-0.349-0.051-0.694-0.116-1.049-0.152
                    c-0.738-0.073-1.482-0.11-2.225-0.112C256.045,0.003,256.025,0,256,0c-0.025,0-0.045,0.003-0.07,0.003
                    c-0.743,0.002-1.485,0.039-2.225,0.112c-0.354,0.036-0.7,0.101-1.049,0.152c-0.402,0.057-0.805,0.104-1.202,0.183
                    c-0.396,0.078-0.779,0.186-1.167,0.285c-0.349,0.088-0.697,0.163-1.043,0.268c-0.379,0.115-0.745,0.256-1.116,0.389
                    c-0.346,0.124-0.694,0.237-1.035,0.379c-0.348,0.143-0.68,0.312-1.016,0.472c-0.352,0.164-0.703,0.321-1.046,0.504
                    c-0.327,0.174-0.636,0.372-0.953,0.562c-0.335,0.2-0.675,0.389-1.001,0.608c-0.352,0.236-0.681,0.496-1.021,0.751
                    c-0.268,0.202-0.546,0.388-0.807,0.604c-0.596,0.489-1.168,1.004-1.713,1.547L123.181,123.181c-9.089,9.089-9.089,23.824,0,32.912
                    C132.268,165.18,147.005,165.18,156.092,156.092z"
                  />
                </svg>
                14%
              </span>
              <p className="text-dark">This week</p>
						</div>
					</div>
					<div className="stats-card-sec-2">
            <p className="text-bold">Issues Fixed</p>
            <h1 className="text-bold text-large">1000+</h1>
          </div>
				</div>
        <img src="./login-background.png" className="background-logo" alt="" />
			</div>
			<div className="lr-sec-2">
				<div className="lr-sec-2-container-1">
          <div className="container-header">
            <span className="logo-icon">
              <img src="./logo.png" alt="" />
            </span>
            <span className="text-normal">CodeAnt Ai</span>
          </div>
          <div className="container-content-selector">
            <button id="s-1" className={`${selectedButton === "saas" && "active"} selector-button`} onClick={
              () => handleSelectorChange("saas")
            }>SaaS</button>
            <button id="s-2" className={`${selectedButton === "self" && "active"} selector-button`} onClick={
              () => handleSelectorChange("self")
            }>Self hosted</button>
          </div>
          <div className="container-body">
            {buttons.filter((b) => b.type === selectedButton).map((button, index) => (
              <button key={index} className="social-button">
                <img src={button.url} alt="" />
                Login with {button.name}
              </button>
            ))}
          </div>
				</div>
				<p className="lr-sec-2-footer">
					By signing up you agree to the <span className="text-dark text-bold">Privacy Policy</span>.
				</p>
			</div>
		</div>
	);
}
