import React, { Component } from 'react'
import './App.css'
import Type from './components/Type'
import Spaced from './components/Spaced'
import Padded from './components/Padded'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <a href="#type">Go to Type</a> • <a href="#spacing">Go to Spacing</a> • <a href="#colors">Go to colors</a>
        <Spaced bottom='m'>
          <Type order='title'>
            <h1 className='app-title'>Basic Primitive Components for Helios</h1>
          </Type>
        </Spaced>
        <Spaced bottom='xxl'>
          <Type order='title' size='smaller'>
            <h2>Type</h2>
          </Type>
        </Spaced>
        <div id='type'>
          <Type order='label'>
            <div>Text Title</div>
          </Type>
          <Type order='title'>
            <h1>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed.</h1>
          </Type>

          <Type order='label'>
            <div>Text Title (w/ Prose)</div>
          </Type>
          <Type order='title' prose>
            <h1>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed.</h1>
          </Type>

          <Type order='label'>
            <div>Text Title Smaller</div>
          </Type>
          <Type order='title' size='smaller'>
            <h2>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin.</h2>
          </Type>

          <Type order='label'>
            <div>Text Title Smaller (w/ Prose)</div>
          </Type>
          <Type order='title' size='smaller' prose>
            <h2>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin.</h2>
          </Type>

          <Type order='label'>
            <div>Text Subtitle Larger</div>
          </Type>
          <Type order='subtitle' size='larger'>
            <h3>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin. Gastropub fashion axe locavore.</h3>
          </Type>

          <Type order='label'>
            <div>Text Subtitle Larger (w/ Prose)</div>
          </Type>
          <Type order='subtitle' size='larger' prose>
            <h3>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin. Gastropub fashion axe locavore.</h3>
          </Type>

          <Type order='label'>
            <div>Text Subtitle</div>
          </Type>
          <Type order='subtitle'>
            <h4>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin. Gastropub fashion axe locavore, fixie skateboard chillwave.</h4>
          </Type>

          <Type order='label'>
            <div>Text Subtitle (w/ Prose)</div>
          </Type>
          <Type order='subtitle' prose>
            <h4>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin. Gastropub fashion axe locavore, fixie skateboard chillwave.</h4>
          </Type>

          <Type order='label'>
            <div>Text Subtitle Smaller</div>
          </Type>
          <Type order='subtitle' size='smaller'>
            <h5>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin. Gastropub fashion axe locavore, fixie skateboard chillwave.</h5>
          </Type>

          <Type order='label'>
            <div>Text Subtitle Smaller (w/ Prose)</div>
          </Type>
          <Type order='subtitle' size='smaller' prose>
            <h5>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin. Gastropub fashion axe locavore, fixie skateboard chillwave.</h5>
          </Type>

          <Type order='label'>
            <div>Text Subtitle Smallest</div>
          </Type>
          <Type order='subtitle' size='smallest'>
            <h6>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin. Gastropub fashion axe locavore, fixie skateboard chillwave fingerstache air plant succulents try-hard celiac. Lyft tofu forage, listicle craft beer edison bulb beard. Food truck butcher knausgaard, VHS freegan distillery wolf bicycle rights.</h6>
          </Type>

          <Type order='label'>
            <div>Text Subtitle Smallest (w/ Prose)</div>
          </Type>
          <Type order='subtitle' size='smallest' prose>
            <h6>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin. Gastropub fashion axe locavore, fixie skateboard chillwave fingerstache air plant succulents try-hard celiac. Lyft tofu forage, listicle craft beer edison bulb beard. Food truck butcher knausgaard, VHS freegan distillery wolf bicycle rights.</h6>
          </Type>

          <Type order='label'>
            <div>Text Body Larger</div>
          </Type>
          <Type order='body' size='larger'>
            <p>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin. Gastropub fashion axe locavore, fixie skateboard chillwave fingerstache air plant succulents try-hard celiac. Lyft tofu forage, listicle craft beer edison bulb beard. Food truck butcher knausgaard, VHS freegan distillery wolf bicycle rights.</p>
          </Type>

          <Type order='label'>
            <div>Text Body Larger (w/ Prose)</div>
          </Type>
          <Type order='body' size='larger' prose>
            <p>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin. Gastropub fashion axe locavore, fixie skateboard chillwave fingerstache air plant succulents try-hard celiac. Lyft tofu forage, listicle craft beer edison bulb beard. Food truck butcher knausgaard, VHS freegan distillery wolf bicycle rights.</p>
          </Type>

          <Type order='label'>
            <div>Text Body</div>
          </Type>
          <Type order='body'>
            <p>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin. Gastropub fashion axe locavore, fixie skateboard chillwave fingerstache air plant succulents try-hard celiac. Lyft tofu forage, listicle craft beer edison bulb beard. Food truck butcher knausgaard, VHS freegan distillery wolf bicycle rights.</p>
          </Type>

          <Type order='label'>
            <div>Text Body (w/ Prose)</div>
          </Type>
          <Type order='body' prose>
            <p>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin. Gastropub fashion axe locavore, fixie skateboard chillwave fingerstache air plant succulents try-hard celiac. Lyft tofu forage, listicle craft beer edison bulb beard. Food truck butcher knausgaard, VHS freegan distillery wolf bicycle rights.</p>
          </Type>

          <Type order='label'>
            <div>Text Body Smaller</div>
          </Type>
          <Type order='body' size='smaller'>
            <p>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin. Gastropub fashion axe locavore, fixie skateboard chillwave fingerstache air plant succulents try-hard celiac. Lyft tofu forage, listicle craft beer edison bulb beard. Food truck butcher knausgaard, VHS freegan distillery wolf bicycle rights.</p>
          </Type>

          <Type order='label'>
            <div>Text Body Smaller (w/ Prose)</div>
          </Type>
          <Type order='body' size='smaller' prose>
            <p>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin. Gastropub fashion axe locavore, fixie skateboard chillwave fingerstache air plant succulents try-hard celiac. Lyft tofu forage, listicle craft beer edison bulb beard. Food truck butcher knausgaard, VHS freegan distillery wolf bicycle rights.</p>
          </Type>

          <Type order='label'>
            <div>Text Body Smallest</div>
          </Type>
          <Type order='body' size='smallest'>
            <p>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin. Gastropub fashion axe locavore, fixie skateboard chillwave fingerstache air plant succulents try-hard celiac. Lyft tofu forage, listicle craft beer edison bulb beard. Food truck butcher knausgaard, VHS freegan distillery wolf bicycle rights.</p>
          </Type>

          <Type order='label'>
            <div>Text Body Smallest (w/ Prose)</div>
          </Type>
          <Type order='body' size='smallest' prose>
            <p>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin. Gastropub fashion axe locavore, fixie skateboard chillwave fingerstache air plant succulents try-hard celiac. Lyft tofu forage, listicle craft beer edison bulb beard. Food truck butcher knausgaard, VHS freegan distillery wolf bicycle rights.</p>
          </Type>

          <Type order='label'>
            <div>Text Label</div>
          </Type>
          <Type order='label'>
            <div>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin. Gastropub fashion axe locavore.
          </div>
          </Type>

          <Type order='label'>
            <div>Text Label (w/ Prose)</div>
          </Type>
          <Type order='label' prose>
            <div>Adaptogen chillwave forage mustache gochujang. Mumblecore skateboard cold-pressed, scenester migas wayfarers austin. Gastropub fashion axe locavore.</div>
          </Type>
        </div>

        <Spaced bottom='xxl' top='xxl'>
          <Type order='title' size='smaller'>
            <h2>Spacing</h2>
          </Type>
        </Spaced>
        <div id='spacing'>
          <Spaced top='xxl' right='xl' bottom='s' left='l'>
            <div style={{backgroundColor: '#f5f5f0'}}>This should have xxl spacing on top, xl spacing on right, s spacing on bottom, and l spacing on left</div>
          </Spaced>
          <Padded top='m' right='xs' bottom='xl' left='s'>
            <div style={{backgroundColor: '#e5e5e0'}}>This should have m padding on top, xs padding on right, xl padding on bottom, and s padding on left</div>
          </Padded>
          <Spaced top='m' right='l' bottom='xs' left='s'>
            <Padded top='xl' right='s' bottom='m' left='xs'>
              <div style={{backgroundColor: '#d5d5d0'}}>This should have both m spacing on top, l spacing on right, xs spacing on bottom, and s spacing on left, as well as xl padding on top, s padding on right, m padding on bottom, and xs padding on left</div>
            </Padded>
          </Spaced>
        </div>
      </div>
    )
  }
}

export default App
