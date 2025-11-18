import { createApp } from 'vue'
import App from './App.vue'
import './styles/tokens.css';
import './styles/fonts.css';

const app = createApp(App)

// component registration
import Box from './components/Box.vue';
import Text from './components/Text.vue';
import Heading from './components/Heading.vue';
import Button from './components/Button.vue';
import Input from './components/Input.vue';
import Textarea from './components/Textarea.vue';
import Avatar from './components/Avatar.vue';
import Link from './components/Link.vue';
import IconContainer from './components/IconContainer.vue';
import Dialog from './components/Dialog.vue';
import Select from './components/Select.vue';

app
  .component('NuiBox', Box)
  .component('NuiText', Text)
  .component('NuiHeading', Heading)
  .component('NuiButton', Button)
  .component('NuiInput', Input)
  .component('NuiTextarea', Textarea)
  .component('NuiAvatar', Avatar)
  .component('NuiLink', Link)
  .component('NuiIconContainer', IconContainer)
  .component('NuiDialog', Dialog)
  .component('NuiSelect', Select)

app.mount('#app')