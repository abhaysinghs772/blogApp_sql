import React from 'react';
import { Link } from 'react-router-dom';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import Menu from '../components/Menu';

function Single() {
    return (
        <div className="single">
            <div className="content">
                <img src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="user">
                    <img src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <div className="info">
                        <span>jhon</span>
                        <p>posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                        <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>Some title Some title Some title </h1>
                <p>
Responding to the furore over two persons being shot dead during a protest against sustained power cuts a day earlier in Katihar district, Bihar Energy Minister Bijendra Prasad Yadav said on Thursday that confronted with an agitated crowd, the police were forced to act.

A crowd of over 1,000 people from five villages of the Barsoi area had gathered in front of the electricity department office at the sub-divisional magistrate’s building on Wednesday to vent their ire at the frequent power outages and indulged in stone-pelting.

“They broke the office gate. If people indulge in hooliganism, then police will have to take action to maintain law and order,” the Minister said. His comment came after the office of the Additional Director General of Police (Headquarters) on Wednesday issued a statement saying that the police “opened limited fire in self-defence” after the crowd could not be controlled with lathi-charge. More than a dozen police personnel and power department employees sustained injuries in the incident, the statement added.


Responding to the furore over two persons being shot dead during a protest against sustained power cuts a day earlier in Katihar district, Bihar Energy Minister Bijendra Prasad Yadav said on Thursday that confronted with an agitated crowd, the police were forced to act.

A crowd of over 1,000 people from five villages of the Barsoi area had gathered in front of the electricity department office at the sub-divisional magistrate’s building on Wednesday to vent their ire at the frequent power outages and indulged in stone-pelting.

“They broke the office gate. If people indulge in hooliganism, then police will have to take action to maintain law and order,” the Minister said. His comment came after the office of the Additional Director General of Police (Headquarters) on Wednesday issued a statement saying that the police “opened limited fire in self-defence” after the crowd could not be controlled with lathi-charge. More than a dozen police personnel and power department employees sustained injuries in the incident, the statement added.


Responding to the furore over two persons being shot dead during a protest against sustained power cuts a day earlier in Katihar district, Bihar Energy Minister Bijendra Prasad Yadav said on Thursday that confronted with an agitated crowd, the police were forced to act.

A crowd of over 1,000 people from five villages of the Barsoi area had gathered in front of the electricity department office at the sub-divisional magistrate’s building on Wednesday to vent their ire at the frequent power outages and indulged in stone-pelting.

“They broke the office gate. If people indulge in hooliganism, then police will have to take action to maintain law and order,” the Minister said. His comment came after the office of the Additional Director General of Police (Headquarters) on Wednesday issued a statement saying that the police “opened limited fire in self-defence” after the crowd could not be controlled with lathi-charge. More than a dozen police personnel and power department employees sustained injuries in the incident, the statement added.
</p>
            </div>
            <div className="menu">
                <Menu/>
            </div>
        </div>
    )
}

export default Single;