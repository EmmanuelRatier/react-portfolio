import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Aboutme from './aboutme';
import Resume from './resume';
import Contact from './contact';
import Projects from './projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/aboutme" component={Aboutme} />
        <Route  path="/resume" component={Resume} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/projects" component={Projects} />
    </Switch>
)

export default Main;