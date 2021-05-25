import SlideShow from "./blocks/channel/SlideShow.svelte";
import Watch from "./blocks/channel/Watch.svelte";
import FeaturedGuide from "./blocks/FeaturedGuide.svelte";
import Logo from "./blocks/Logo.svelte";
import MainFooter from "./blocks/MainFooter.svelte";
import Navigation from "./blocks/Navigation.svelte";
import Markdown from "./blocks/Markdown.svelte";
import OpenSource from "./blocks/OpenSource.svelte";
import SideNavigation from "./blocks/SideNavigation.svelte";
import Slogan from "./blocks/Slogan.svelte";
import Solutions from "./blocks/Solutions.svelte";

import Generic1 from './wireframes/Generic1.svelte'
import SplashPage1 from './wireframes/SplashPage1.svelte'
import SplashPage2 from './wireframes/SplashPage2.svelte'
import MasterDetail1 from './wireframes/MasterDetail1.svelte'

export let views = {
  // blocks
  SlideShow,
  Watch,
  FeaturedGuide,
  Logo,
  MainFooter,
  Navigation,
  Markdown,
  OpenSource,
  SideNavigation,
  Slogan,
  Solutions,
  // wireframes
  Generic1,
  SplashPage1,
  SplashPage2,
  MasterDetail1
}