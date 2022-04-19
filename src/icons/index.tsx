import React from 'react';

import { SvgIcon, SvgIconProps } from '@mui/material';

import { ReactComponent as Active } from './active.svg';
import { ReactComponent as Away } from './away.svg';
import { ReactComponent as Babysitter } from './babysitter.svg';
import { ReactComponent as Daylight } from './daylight.svg';
import { ReactComponent as Filming } from './filming.svg';
import { ReactComponent as GetWet } from './getWet.svg';
import { ReactComponent as Home } from './home.svg';
import { ReactComponent as Indoors } from './indoors.svg';
import { ReactComponent as Meal } from './meal.svg';
import { ReactComponent as Mess } from './mess.svg';
import { ReactComponent as Nighttime } from './nighttime.svg';
import { ReactComponent as Outdoors } from './outdoors.svg';
import { ReactComponent as PlanAhead } from './planAhead.svg';
import { ReactComponent as Snacks } from './snacks.svg';
import { ReactComponent as Supplies } from './supplies.svg';

export {
  ActiveIcon,
  AwayIcon,
  BabysitterIcon,
  DaylightIcon,
  FilmingIcon,
  GetWetIcon,
  HomeIcon,
  IndoorsIcon,
  MealIcon,
  MessIcon,
  NighttimeIcon,
  OutdoorsIcon,
  PlanAheadIcon,
  SnacksIcon,
  SuppliesIcon
};

function ActiveIcon(props: SvgIconProps) {
  return <SvgIcon component={Active} {...props} />;
}

function AwayIcon(props: SvgIconProps) {
  return <SvgIcon component={Away} {...props} />;
}

function BabysitterIcon(props: SvgIconProps) {
  return <SvgIcon component={Babysitter} {...props} />;
}

function DaylightIcon(props: SvgIconProps) {
  return <SvgIcon component={Daylight} {...props} />;
}

function FilmingIcon(props: SvgIconProps) {
  return <SvgIcon component={Filming} {...props} />;
}

function GetWetIcon(props: SvgIconProps) {
  return <SvgIcon component={GetWet} {...props} />;
}

function HomeIcon(props: SvgIconProps) {
  return <SvgIcon component={Home} {...props} />;
}

function IndoorsIcon(props: SvgIconProps) {
  return <SvgIcon component={Indoors} {...props} />;
}

function MealIcon(props: SvgIconProps) {
  return <SvgIcon component={Meal} {...props} />;
}

function MessIcon(props: SvgIconProps) {
  return <SvgIcon component={Mess} {...props} />;
}

function NighttimeIcon(props: SvgIconProps) {
  return <SvgIcon component={Nighttime} {...props} />;
}

function OutdoorsIcon(props: SvgIconProps) {
  return <SvgIcon component={Outdoors} {...props} />;
}

function PlanAheadIcon(props: SvgIconProps) {
  return <SvgIcon component={PlanAhead} {...props} />;
}

function SnacksIcon(props: SvgIconProps) {
  return <SvgIcon component={Snacks} {...props} />;
}

function SuppliesIcon(props: SvgIconProps) {
  return <SvgIcon component={Supplies} {...props} />;
}
