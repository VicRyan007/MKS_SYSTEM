import React from "react";
import Skeleton from "react-loading-skeleton";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/general.css'

export default function CardSkeleton() {
    return (
        <div className="col-3">
            <div className="card">
                <div className="card-body">
                    <img src="" alt="" />
                    <h5 className="card-title"><Skeleton /></h5>
                    <p className="price"><Skeleton /></p>
                    <button className="btn btn-primary"><Skeleton /></button>
                </div>
            </div>
        </div>
    )
}