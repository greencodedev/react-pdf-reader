// eslint-disable-next-line
import React from 'react';
import './App.css';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import Sidebar from './components/sidebar/Siderbar';
import MyDocument from './components/pdfviewer/MyDocument';
import ImageViewer from './components/imageviever/ImageViewer';
import Slider from './components/slider/Slider';
class App extends React.Component {
	state = {
		file: "",
		tabs: "home-tab"
	}
	handleChange = (event) => {
		console.log(event.target)
		this.setState({
			file: URL.createObjectURL(event.target.files[0])
		})

	}
	renderTabs = () => {
		const { tabs } = this.state;
		console.log(tabs)
		if (tabs === "home-tab") {
			return (
				<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
					<div className="site_nav_content_box">

						<ul className="site_appreciation_list list-unstyled mb-0">

							<li>
								<div className="site_appreciation_thumb d-flex mb-2">
									<div className="site_thumb_icon mr-2"><i
										className="fas fa-thumbs-up site_thumb_green"></i></div>
									<div className="d-flex">
										<h6 className="my-auto">It is a long established fact that a reader will
														be distracted </h6>
									</div>
								</div>
								<ul className="site_apprecation_content_list list-unstyled">
									<li><i className="fas fa-star"></i> Type: Sanction</li>
									<li><i className="fas fa-heart"></i> Partie can concernee: David et Max
													chief teast</li>

									<ul className="site_enhance_list list-inline">
										<li className="list-inline-item"><i className="fas fa-circle"></i> Echeances
													</li>
										<li className="list-inline-item"><a href="#"
											className="site_apprecation_content_link">Ire plus</a></li>
									</ul>

								</ul>

							</li>

							<li>
								<div className="site_appreciation_thumb d-flex mb-2">
									<div className="site_thumb_icon mr-2"><i
										className="fas fa-thumbs-down site_thumb_red"></i></div>
									<div className="d-flex">
										<h6 className="my-auto">It is a long established fact that a reader will
														be distracted </h6>
									</div>
								</div>
								<ul className="site_apprecation_content_list list-unstyled">
									<li><i className="fas fa-star"></i> Type: Sanction</li>
									<li><i className="fas fa-heart"></i> Partie can concernee: David et Max
													chief teast</li>

									<ul className="site_enhance_list list-inline">
										<li className="list-inline-item"><i className="fas fa-circle"></i> Echeances
													</li>
										<li className="list-inline-item"><a href="#"
											className="site_apprecation_content_link">Ire plus</a></li>
									</ul>

								</ul>

							</li>

							<li>
								<div className="site_appreciation_thumb d-flex mb-2">
									<div className="site_thumb_icon mr-2"><i
										className="fas fa-thumbs-up site_thumb_green"></i></div>
									<div className="d-flex">
										<h6 className="my-auto">It is a long established fact that a reader will
														be distracted </h6>
									</div>
								</div>
								<ul className="site_apprecation_content_list list-unstyled">
									<li><i className="fas fa-star"></i> Type: Sanction</li>
									<li><i className="fas fa-heart"></i> Partie can concernee: David et Max
													chief teast</li>

									<ul className="site_enhance_list list-inline">
										<li className="list-inline-item"><i className="fas fa-circle"></i> Echeances
													</li>
										<li className="list-inline-item"><a href="#"
											className="site_apprecation_content_link">Ire plus</a></li>
									</ul>

								</ul>

							</li>
							<li>
								<div className="site_appreciation_thumb d-flex mb-2">
									<div className="site_thumb_icon mr-2"><i
										className="fas fa-thumbs-up site_thumb_green"></i></div>
									<div className="d-flex">
										<h6 className="my-auto">It is a long established fact that a reader will
														be distracted </h6>
									</div>
								</div>
								<ul className="site_apprecation_content_list list-unstyled">
									<li><i className="fas fa-star"></i> Type: Sanction</li>
									<li><i className="fas fa-heart"></i> Partie can concernee: David et Max
													chief teast</li>

									<ul className="site_enhance_list list-inline">
										<li className="list-inline-item"><i className="fas fa-circle"></i> Echeances
													</li>
										<li className="list-inline-item"><a href="#"
											className="site_apprecation_content_link">Ire plus</a></li>
									</ul>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			)
		} else if (tabs == "profile-tab") {
			return (
				<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
					<div className="site_nav_content_box">

						<ul className="site_appreciation_list list-unstyled mb-0">

							<li>
								<div className="site_appreciation_thumb d-flex mb-2">
									<div className="site_thumb_icon mr-2"><i
										className="fas fa-thumbs-down site_thumb_red"></i></div>
									<div className="d-flex">
										<h6 className="my-auto">It is a long established fact that a reader will
														be distracted </h6>
									</div>
								</div>
								<ul className="site_apprecation_content_list list-unstyled">
									<li><i className="fas fa-star"></i> Type: Sanction</li>
									<li><i className="fas fa-heart"></i> Partie can concernee: David et Max
													chief teast</li>

									<ul className="site_enhance_list list-inline">
										<li className="list-inline-item"><i className="fas fa-circle"></i> Echeances
													</li>
										<li className="list-inline-item"><a href="#"
											className="site_apprecation_content_link">Ire plus</a></li>
									</ul>

								</ul>

							</li>

							<li>
								<div className="site_appreciation_thumb d-flex mb-2">
									<div className="site_thumb_icon mr-2"><i
										className="fas fa-thumbs-down site_thumb_red"></i></div>
									<div className="d-flex">
										<h6 className="my-auto">It is a long established fact that a reader will
														be distracted </h6>
									</div>
								</div>
								<ul className="site_apprecation_content_list list-unstyled">
									<li><i className="fas fa-star"></i> Type: Sanction</li>
									<li><i className="fas fa-heart"></i> Partie can concernee: David et Max
													chief teast</li>

									<ul className="site_enhance_list list-inline">
										<li className="list-inline-item"><i className="fas fa-circle"></i> Echeances
													</li>
										<li className="list-inline-item"><a href="#"
											className="site_apprecation_content_link">Ire plus</a></li>
									</ul>

								</ul>

							</li>

							<li>
								<div className="site_appreciation_thumb d-flex mb-2">
									<div className="site_thumb_icon mr-2"><i
										className="fas fa-thumbs-up site_thumb_green"></i></div>
									<div className="d-flex">
										<h6 className="my-auto">It is a long established fact that a reader will
														be distracted </h6>
									</div>
								</div>
								<ul className="site_apprecation_content_list list-unstyled">
									<li><i className="fas fa-star"></i> Type: Sanction</li>
									<li><i className="fas fa-heart"></i> Partie can concernee: David et Max
													chief teast</li>

									<ul className="site_enhance_list list-inline">
										<li className="list-inline-item"><i className="fas fa-circle"></i> Echeances
													</li>
										<li className="list-inline-item"><a href="#"
											className="site_apprecation_content_link">Ire plus</a></li>
									</ul>

								</ul>

							</li>


						</ul>

					</div>
				</div>
			)
		} else {
			return (

				<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
					<div className="site_nav_content_box">


						<ul className="site_appreciation_list list-unstyled mb-0">

							<li>
								<div className="site_appreciation_thumb d-flex mb-2">
									<div className="site_thumb_icon mr-2"><i
										className="fas fa-thumbs-up site_thumb_green"></i></div>
									<div className="d-flex">
										<h6 className="my-auto">It is a long established fact that a reader will
								be distracted </h6>
									</div>
								</div>
								<ul className="site_apprecation_content_list list-unstyled">
									<li><i className="fas fa-star"></i> Type: Sanction</li>
									<li><i className="fas fa-heart"></i> Partie can concernee: David et Max
							chief teast</li>

									<ul className="site_enhance_list list-inline">
										<li className="list-inline-item"><i className="fas fa-circle"></i> Echeances
							</li>
										<li className="list-inline-item"><a href="#"
											className="site_apprecation_content_link">Ire plus</a></li>
									</ul>

								</ul>

							</li>

							<li>
								<div className="site_appreciation_thumb d-flex mb-2">
									<div className="site_thumb_icon mr-2"><i
										className="fas fa-thumbs-down site_thumb_red"></i></div>
									<div className="d-flex">
										<h6 className="my-auto">It is a long established fact that a reader will
								be distracted </h6>
									</div>
								</div>
								<ul className="site_apprecation_content_list list-unstyled">
									<li><i className="fas fa-star"></i> Type: Sanction</li>
									<li><i className="fas fa-heart"></i> Partie can concernee: David et Max
							chief teast</li>

									<ul className="site_enhance_list list-inline">
										<li className="list-inline-item"><i className="fas fa-circle"></i> Echeances
							</li>
										<li className="list-inline-item"><a href="#"
											className="site_apprecation_content_link">Ire plus</a></li>
									</ul>

								</ul>

							</li>

							<li>
								<div className="site_appreciation_thumb d-flex mb-2">
									<div className="site_thumb_icon mr-2"><i
										className="fas fa-thumbs-up site_thumb_green"></i></div>
									<div className="d-flex">
										<h6 className="my-auto">It is a long established fact that a reader will
								be distracted </h6>
									</div>
								</div>
								<ul className="site_apprecation_content_list list-unstyled">
									<li><i className="fas fa-star"></i> Type: Sanction</li>
									<li><i className="fas fa-heart"></i> Partie can concernee: David et Max
							chief teast</li>

									<ul className="site_enhance_list list-inline">
										<li className="list-inline-item"><i className="fas fa-circle"></i> Echeances
							</li>
										<li className="list-inline-item"><a href="#"
											className="site_apprecation_content_link">Ire plus</a></li>
									</ul>

								</ul>
							</li>
						</ul>
					</div>
				</div>
			)
		}
	}
	handleTabs = (evt) => {
		console.log(evt.target.id)
		this.setState({
			tabs: evt.target.id
		})
	}
	render() {
		const { file } = this.state
		return (
			<div className="container-fluid mt-4">
				<div className="row">

					<Sidebar onChange={(evt) => this.handleChange(evt)} MAP={this.MAP} />
					{/* {file !== "" ? (file.includes("pdf") ? */}
					<div className="col-lg-6  mb-4">
						<div className="site_rounded_box">
							<MyDocument /></div></div>
					{/* : <div className="col-lg-6  mb-4">
							<div className="site_rounded_box"><ImageViewer file={file} MAP={this.MAP} />
							</div></div>) : <div className="col-lg-6  mb-4">
							<div className="site_rounded_box"></div></div>}  */}


					<div className="col-lg-4 mb-4">
						<div className="site_rounded_box">
							<h3 className="site_contents_title text-center mb-4"><i className="fas fa-star"></i> Appreciation</h3>
							<hr className="bg-light mb-4" />
							<div className="site_custom_range mb-3">
								<Slider />
							</div>

							<p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>


							<div className="site_tabs_wrapper">


								<ul className="site_nav_tabs nav nav-tabs nav-fill" id="myTab" role="tablist">
									<li className="nav-item">
										<a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
											aria-controls="home" aria-selected="true" onClick={this.handleTabs}>Clouses</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
											aria-controls="profile" aria-selected="false" onClick={this.handleTabs}>Obligations</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
											aria-controls="contact" aria-selected="false" onClick={this.handleTabs}>Echeances</a>
									</li>
								</ul>
								<div className="tab-content" id="myTabContent">
									{this.renderTabs()}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


		);
	}
}

export default App;
