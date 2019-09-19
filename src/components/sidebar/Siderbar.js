import React from "react";

function Sidebar(props){
    return (
        <div className="col-lg-2 mb-4">
						<div className="site_rounded_box h-auto">
							<input type="file"
								onChange={(evt)=>props.onChange(evt)}
								style={{ display: "none" }}
								id="text-button-file" />

							<div className="site_download_icon mb-2">
								<label htmlFor="text-button-file" >
									<i className="fas fa-download">
									</i>
								</label>
							</div>


							<h3 className="site_contents_title text-center mb-3">Contents</h3>

							<hr className="bg-light" />

							<ol className="site_menu_list pl-3">
								<li><a href="#">Minerva Hooper</a></li>
								<li><a href="#">Dakota Rice</a></li>
								<li><a href="#">Sage Rodriguez</a></li>
								<li><a href="#">Philip Chanley</a></li>
								<li><a href="#">Doris Greene</a></li>
								<li><a href="#">Minerva Hooper</a></li>
								<li><a href="#">Dakota Rice</a></li>
								<li><a href="#">Sage Rodriguez</a></li>
								<li><a href="#">Philip Chanley</a></li>
								<li><a href="#">Doris Greene</a></li>

							</ol>

						</div>
					</div>
    )
}
export default Sidebar;