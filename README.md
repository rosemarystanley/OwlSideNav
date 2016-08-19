# OwlSideNav
Owl Carousel 2 Plugin for Side Navigation 

Currently under development.

# Requirements
- [OwlCarousel 2.1.6](http://www.owlcarousel.owlgraphic.com/)
- JQuery
- Owl Navigation Plugin (Set option `nav: true`)

# Installation
- Add the `owl.sidenav.css` file after your owl theme or owl carousel stylesheet.
- Add the `owl.sidenav.js` file after the owl carousel js file.
- Set `nav: true` in your owl carousel initialization.
- Set `sideNav: true` in your owl carousel initialization.

## Example

```
  <link rel="stylesheet" href="owl.carousel.min.css">
  <link rel="stylesheet" href="owl.theme.default.min.css">
  <link rel="stylesheet" href="owl.sidenav.css">
</head>
<body>
  <div class="owl-carousel owl-theme">
    <div class="item">
      <h4>1</h4>
    </div>
    <div class="item">
      <h4>2</h4>
    </div>
  </div>
  <script type="text/javascript" src="jquery.min.js"></script>
  <script src="owl.carousel.js"></script>
  <script src="owl.sidenav.js"></script>
  <script>
    $(document).ready(function() {
      $('.owl-carousel').owlCarousel({
        nav: true,
        sideNav: true,
      })
    });
  </script>
</body>
```
