import React from 'react'
import {
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom'


  import ExAccordion from '../../Accordion'
  import ExAleart from '../../Alerts'
  import ExBadges from '../../Badges'
  import ExBreadcrumbs from '../../Breadcrumbs'
  import ExButtonGroups from '../../ButtonGroups'
  import ExButtons from '../../Buttons' 
  import ExCards from '../../Cards'
  import ExCarousels from '../../Carousels'
  import ExDropdowns from '../../Dropdowns'
  import ExFigures from '../../Figures'
  import ExForms from '../../Forms'
  import ExImages from '../../Images'
  import ExInputGroup from '../../InputGroup'
  import ExJumbotrons from '../../Jumbotron'
  import ExListgroups from '../../Listgroups'
  import ExModals from '../../Modals'
  import ExNav from '../../Nav'
  import ExNavbar from '../../Navbar'
  import ExOverlays from '../../Overlays'
  import ExPaginations from '../../Pagination'
  import ExPopovers from '../../Popovers'
  import ExProgress from '../../Progress'
  import ExReactOverlays from '../../ReactOverlays'
  import ExSpinners from '../../Spinners'
  import ExTables from '../../Tables'
  import ExTabs from '../../Tabs'
  import ExToasts from '../../Toasts'
  import ExTooltips from '../../Tooltips'
  import ExTransitions from '../../Transitions'
  import ExResponsiveEmbed from '../../UtilsResponsiveEmbed'



export default function Content() {
    

    return (
    <div className="content-wrapper">
        <div className="col">

            <Switch>
                <Route exact path="/accordion" component={ExAccordion} />
                <Route exact path="/aleart" component={ExAleart} />
                <Route exact path="/badges" component={ExBadges} />
                <Route exact path="/breadcrumbs" component={ExBreadcrumbs} />
                <Route exact path="/buttongroups" component={ExButtonGroups} />
                <Route exact path="/buttons" component={ExButtons} />
                <Route exact path="/cards" component={ExCards} />
                <Route exact path="/carousels" component={ExCarousels} />
                <Route exact path="/dropdowns" component={ExDropdowns} />
                <Route exact path="/figures" component={ExFigures} />
                <Route exact path="/forms" component={ExForms} />
                <Route exact path="/images" component={ExImages} />
                <Route exact path="/inputgroup" component={ExInputGroup} />
                <Route exact path="/jumbotron" component={ExJumbotrons} />
                <Route exact path="/listgroups" component={ExListgroups} />
                <Route exact path="/modals" component={ExModals} />
                <Route exact path="/nav" component={ExNav} />
                <Route exact path="/navbar" component={ExNavbar} />
                <Route exact path="/overlays" component={ExOverlays} />
                <Route exact path="/pagination" component={ExPaginations} />
                <Route exact path="/popovers" component={ExPopovers} />
                <Route exact path="/progress" component={ExProgress} />
                <Route exact path="/reactoverlays" component={ExReactOverlays} />
                <Route exact path="/spinners" component={ExSpinners} />
                <Route exact path="/tables" component={ExTables} />
                <Route exact path="/tabs" component={ExTabs} />
                <Route exact path="/toasts" component={ExToasts} />
                <Route exact path="/tooltips" component={ExTooltips} />
                <Route exact path="/transitions" component={ExTransitions} />
                <Route exact path="/utilsresponsiveembed" component={ExResponsiveEmbed} />

                <Redirect to="/" />
            </Switch>
            
        </div>
    </div>

    )
}
