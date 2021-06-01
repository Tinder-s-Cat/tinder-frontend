import React from 'react'
import './Component.css'

export default function Cards(cat) {
    return (
        <div>
            <div
                className="card"
                style={{ backgroundImage: `url(${cat.cat.profilePicture})` }}
                >
                    <h3>Location: {cat.cat.User.location}</h3>
                    <span className="span-age">{cat.cat.age}th</span>
                    <p className="card-name">{cat.cat.name},</p>
                </div>
        </div>
    )
}