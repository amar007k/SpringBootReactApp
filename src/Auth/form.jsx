import React, { useState } from 'react';

export const Form = () => {

    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);

    console.log(formData)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        // Add code to post the form data to the API
        fetch('http://localhost:8080/api/studentDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Data successfully posted:', data);
                // Add any additional logic after successful posting
            })
            .catch((error) => {
                console.error('Error posting data:', error);
            });

    };

    // if (loading) {
    //     return <p>Loading...</p>;
    // }

    return (
        <>


            <div class="card text-left">
                <img class="card-img-top" src="holder.js/100px180/" alt=""></img>
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="">First name</label>
                        <input type="text" class="form-control" onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}  aria-describedby="emailHelpId" placeholder="First name"></input>
                    </div>

                    <div class="form-group">
                        <label for="">last name</label>
                        <input type="text" class="form-control" onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}  aria-describedby="emailHelpId" placeholder="last name"></input>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>




        </>
    );
};
