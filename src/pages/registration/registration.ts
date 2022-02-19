import { render } from "../../utils/renderDOM";
import { Registration } from "./Registration.block";
import { registrationState } from "./registration.state";
import {input} from '../../components/input/input'


const registration = new Registration({
  events: {
    click: (event: Event) => {

    },
  },
  ...registrationState,
  input

});

render("#root", registration);