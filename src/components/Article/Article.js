import React from 'react';
import './Article.css'
import article1 from '../../images/article/article1.jpg'
import article2 from '../../images/article/article2.jpg'
import article3 from '../../images/article/article3.jpg'
import article4 from '../../images/article/article4.jpg'
const Article = () => {
    return (
        <div>

            <div className="row mb-2 mt-2 w-75 justify-content-center align-items-center mx-auto">
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative article-content">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success">Post</strong>
                            <h3 className="mb-0">Physiotherapy</h3>
                            <div className="mb-1 text-muted">Nov 12</div>
                            <p className="card-text mb-auto">TPhysical therapy, also known as physiotherapy, is one of the allied health professions. It is provided by physical therapists who promote, maintain.</p>
                            <a href="#" className="stretched-link">Continue reading</a>
                        </div>
                        <div className="col-auto d-none d-lg-block">

                            <img className="article-images h-100" width="200" height="250" src={article1} alt="" />

                        </div>

                    </div>

                </div>
                <div className="col-md-6">
                    <div className="article-content row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative ">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success">Post</strong>
                            <h3 className="mb-0">knee Replacement</h3>
                            <div className="mb-1 text-muted">Nov 2</div>
                            <p className="card-text mb-auto">Knee replacement, also known as knee arthroplasty, is a surgical procedure to replace the weight-bearing surfaces of the knee joint to relieve pain and disability.</p>
                            <a href="#" className="stretched-link">Continue reading</a>
                        </div>
                        <div className="col-auto d-none d-lg-block">

                            <img className="article-images h-100" width="200" height="250" src={article2} alt="" />
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className=" article-content row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative ">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success">Post</strong>
                            <h3 className="mb-0">Hip Replacement</h3>
                            <div className="mb-1 text-muted">Nov 12</div>
                            <p className="card-text mb-auto">Hip replacement is a surgical procedure in which the hip joint is replaced by a prosthetic implant, that is, a hip prosthesis.</p>
                            <a href="#" className="stretched-link">Continue reading</a>
                        </div>
                        <div className="col-auto d-none d-lg-block">

                            <img className="article-images h-100" width="200" height="250" src={article3} alt="" />
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="article-content row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative ">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success">Post</strong>
                            <h3 className="mb-0">Sports medicine</h3>
                            <div className="mb-1 text-muted">Nov 12</div>
                            <p className="card-text mb-auto">Sports medicine is a branch of medicine that deals with physical fitness and the treatment and prevention of injuries related to sports and exercise.</p>
                            <a href="#" className="stretched-link">Continue reading</a>
                        </div>
                        <div className="col-auto d-none d-lg-block">

                            <img className="article-images h-100" width="200" height="250" src={article4} alt="" />
                        </div>
                    </div>

                </div>

            </div>



        </div>
    );
};

export default Article;