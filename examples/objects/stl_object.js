// Test Box by Tony Buser http://cloudscad.com\
var stl_string = '\
solid OpenSCAD_Model\
  facet normal -1.000000 0.000000 0.000000\
    outer loop\
      vertex -5.000000 1.563663 3.753020\
      vertex -5.000000 5.000000 0.000000\
      vertex -5.000000 0.000000 3.000000\
    endloop\
  endfacet\
  facet normal -1.000000 0.000000 -0.000000\
    outer loop\
      vertex -5.000000 0.867767 6.801938\
      vertex -5.000000 -5.000000 10.000000\
      vertex -5.000000 5.000000 10.000000\
    endloop\
  endfacet\
  facet normal -1.000000 0.000000 -0.000000\
    outer loop\
      vertex -5.000000 -5.000000 0.000000\
      vertex -5.000000 -5.000000 10.000000\
      vertex -5.000000 -1.949856 5.445042\
    endloop\
  endfacet\
  facet normal -1.000000 0.000000 0.000000\
    outer loop\
      vertex -5.000000 -5.000000 0.000000\
      vertex -5.000000 -1.949856 5.445042\
      vertex -5.000000 -1.563663 3.753020\
    endloop\
  endfacet\
  facet normal -1.000000 -0.000000 0.000000\
    outer loop\
      vertex -5.000000 -5.000000 0.000000\
      vertex -5.000000 -1.563663 3.753020\
      vertex -5.000000 5.000000 0.000000\
    endloop\
  endfacet\
  facet normal -1.000000 0.000000 0.000000\
    outer loop\
      vertex -5.000000 -1.563663 3.753020\
      vertex -5.000000 0.000000 3.000000\
      vertex -5.000000 5.000000 0.000000\
    endloop\
  endfacet\
  facet normal -1.000000 0.000000 0.000000\
    outer loop\
      vertex -5.000000 5.000000 0.000000\
      vertex -5.000000 1.563663 3.753020\
      vertex -5.000000 5.000000 10.000000\
    endloop\
  endfacet\
  facet normal -1.000000 0.000000 0.000000\
    outer loop\
      vertex -5.000000 1.563663 3.753020\
      vertex -5.000000 1.949856 5.445042\
      vertex -5.000000 5.000000 10.000000\
    endloop\
  endfacet\
  facet normal -1.000000 0.000000 -0.000000\
    outer loop\
      vertex -5.000000 1.949856 5.445042\
      vertex -5.000000 0.867767 6.801938\
      vertex -5.000000 5.000000 10.000000\
    endloop\
  endfacet\
  facet normal -1.000000 0.000000 -0.000000\
    outer loop\
      vertex -5.000000 -1.949856 5.445042\
      vertex -5.000000 -5.000000 10.000000\
      vertex -5.000000 -0.867767 6.801938\
    endloop\
  endfacet\
  facet normal -1.000000 -0.000000 -0.000000\
    outer loop\
      vertex -5.000000 -0.867767 6.801938\
      vertex -5.000000 -5.000000 10.000000\
      vertex -5.000000 0.867767 6.801938\
    endloop\
  endfacet\
  facet normal 0.000000 -1.000000 0.000000\
    outer loop\
      vertex -5.000000 -5.000000 10.000000\
      vertex -5.000000 -5.000000 0.000000\
      vertex 5.000000 -5.000000 0.000000\
    endloop\
  endfacet\
  facet normal 0.000000 -1.000000 0.000000\
    outer loop\
      vertex 5.000000 -5.000000 10.000000\
      vertex -5.000000 -5.000000 10.000000\
      vertex 5.000000 -5.000000 0.000000\
    endloop\
  endfacet\
  facet normal -0.000000 -0.000000 -1.000000\
    outer loop\
      vertex -5.000000 -5.000000 0.000000\
      vertex -5.000000 5.000000 0.000000\
      vertex 5.000000 -5.000000 0.000000\
    endloop\
  endfacet\
  facet normal 0.000000 0.000000 -1.000000\
    outer loop\
      vertex 5.000000 -5.000000 0.000000\
      vertex -5.000000 5.000000 0.000000\
      vertex 5.000000 5.000000 0.000000\
    endloop\
  endfacet\
  facet normal 0.000000 1.000000 0.000000\
    outer loop\
      vertex -5.000000 5.000000 0.000000\
      vertex -5.000000 5.000000 10.000000\
      vertex 5.000000 5.000000 0.000000\
    endloop\
  endfacet\
  facet normal 0.000000 1.000000 0.000000\
    outer loop\
      vertex 5.000000 5.000000 0.000000\
      vertex -5.000000 5.000000 10.000000\
      vertex 5.000000 5.000000 10.000000\
    endloop\
  endfacet\
  facet normal 0.000000 -0.000000 1.000000\
    outer loop\
      vertex -5.000000 5.000000 10.000000\
      vertex -5.000000 -5.000000 10.000000\
      vertex 5.000000 -5.000000 10.000000\
    endloop\
  endfacet\
  facet normal 0.000000 0.000000 1.000000\
    outer loop\
      vertex 5.000000 5.000000 10.000000\
      vertex -5.000000 5.000000 10.000000\
      vertex 5.000000 -5.000000 10.000000\
    endloop\
  endfacet\
  facet normal 0.000000 0.781831 -0.623490\
    outer loop\
      vertex 5.000000 -0.867767 6.801938\
      vertex 5.000000 -1.949856 5.445042\
      vertex -5.000000 -0.867767 6.801938\
    endloop\
  endfacet\
  facet normal 0.000000 0.781831 -0.623490\
    outer loop\
      vertex -5.000000 -0.867767 6.801938\
      vertex 5.000000 -1.949856 5.445042\
      vertex -5.000000 -1.949856 5.445042\
    endloop\
  endfacet\
  facet normal -0.000000 0.974928 0.222521\
    outer loop\
      vertex 5.000000 -1.563663 3.753020\
      vertex -5.000000 -1.563663 3.753020\
      vertex 5.000000 -1.949856 5.445042\
    endloop\
  endfacet\
  facet normal -0.000000 0.974928 0.222521\
    outer loop\
      vertex 5.000000 -1.949856 5.445042\
      vertex -5.000000 -1.563663 3.753020\
      vertex -5.000000 -1.949856 5.445042\
    endloop\
  endfacet\
  facet normal 0.000000 0.000000 -1.000000\
    outer loop\
      vertex 5.000000 0.867767 6.801938\
      vertex 5.000000 -0.867767 6.801938\
      vertex -5.000000 0.867767 6.801938\
    endloop\
  endfacet\
  facet normal 0.000000 0.000000 -1.000000\
    outer loop\
      vertex -5.000000 0.867767 6.801938\
      vertex 5.000000 -0.867767 6.801938\
      vertex -5.000000 -0.867767 6.801938\
    endloop\
  endfacet\
  facet normal 0.000000 -0.781831 -0.623490\
    outer loop\
      vertex -5.000000 1.949856 5.445042\
      vertex 5.000000 1.949856 5.445042\
      vertex 5.000000 0.867767 6.801938\
    endloop\
  endfacet\
  facet normal 0.000000 -0.781831 -0.623490\
    outer loop\
      vertex -5.000000 0.867767 6.801938\
      vertex -5.000000 1.949856 5.445042\
      vertex 5.000000 0.867767 6.801938\
    endloop\
  endfacet\
  facet normal -0.000000 -0.974928 0.222521\
    outer loop\
      vertex 5.000000 1.563663 3.753020\
      vertex 5.000000 1.949856 5.445042\
      vertex -5.000000 1.949856 5.445042\
    endloop\
  endfacet\
  facet normal -0.000000 -0.974928 0.222521\
    outer loop\
      vertex -5.000000 1.563663 3.753020\
      vertex 5.000000 1.563663 3.753020\
      vertex -5.000000 1.949856 5.445042\
    endloop\
  endfacet\
  facet normal -0.000000 -0.433884 0.900969\
    outer loop\
      vertex 5.000000 0.000000 3.000000\
      vertex 5.000000 1.563663 3.753020\
      vertex -5.000000 1.563663 3.753020\
    endloop\
  endfacet\
  facet normal -0.000000 -0.433884 0.900969\
    outer loop\
      vertex -5.000000 0.000000 3.000000\
      vertex 5.000000 0.000000 3.000000\
      vertex -5.000000 1.563663 3.753020\
    endloop\
  endfacet\
  facet normal -0.000000 0.433884 0.900969\
    outer loop\
      vertex 5.000000 -1.563663 3.753020\
      vertex 5.000000 0.000000 3.000000\
      vertex -5.000000 0.000000 3.000000\
    endloop\
  endfacet\
  facet normal -0.000000 0.433884 0.900969\
    outer loop\
      vertex -5.000000 -1.563663 3.753020\
      vertex 5.000000 -1.563663 3.753020\
      vertex -5.000000 0.000000 3.000000\
    endloop\
  endfacet\
  facet normal 1.000000 0.000000 -0.000000\
    outer loop\
      vertex 5.000000 -1.563663 3.753020\
      vertex 5.000000 -5.000000 0.000000\
      vertex 5.000000 5.000000 0.000000\
    endloop\
  endfacet\
  facet normal 1.000000 -0.000000 -0.000000\
    outer loop\
      vertex 5.000000 0.000000 3.000000\
      vertex 5.000000 -1.563663 3.753020\
      vertex 5.000000 5.000000 0.000000\
    endloop\
  endfacet\
  facet normal 1.000000 0.000000 -0.000000\
    outer loop\
      vertex 5.000000 -5.000000 10.000000\
      vertex 5.000000 -5.000000 0.000000\
      vertex 5.000000 -1.563663 3.753020\
    endloop\
  endfacet\
  facet normal 1.000000 0.000000 -0.000000\
    outer loop\
      vertex 5.000000 1.949856 5.445042\
      vertex 5.000000 1.563663 3.753020\
      vertex 5.000000 5.000000 0.000000\
    endloop\
  endfacet\
  facet normal 1.000000 0.000000 0.000000\
    outer loop\
      vertex 5.000000 -5.000000 10.000000\
      vertex 5.000000 -1.563663 3.753020\
      vertex 5.000000 -1.949856 5.445042\
    endloop\
  endfacet\
  facet normal 1.000000 0.000000 -0.000000\
    outer loop\
      vertex 5.000000 1.563663 3.753020\
      vertex 5.000000 0.000000 3.000000\
      vertex 5.000000 5.000000 0.000000\
    endloop\
  endfacet\
  facet normal 1.000000 0.000000 0.000000\
    outer loop\
      vertex 5.000000 5.000000 10.000000\
      vertex 5.000000 -5.000000 10.000000\
      vertex 5.000000 -0.867767 6.801938\
    endloop\
  endfacet\
  facet normal 1.000000 0.000000 0.000000\
    outer loop\
      vertex 5.000000 5.000000 10.000000\
      vertex 5.000000 -0.867767 6.801938\
      vertex 5.000000 0.867767 6.801938\
    endloop\
  endfacet\
  facet normal 1.000000 0.000000 0.000000\
    outer loop\
      vertex 5.000000 5.000000 10.000000\
      vertex 5.000000 1.949856 5.445042\
      vertex 5.000000 5.000000 0.000000\
    endloop\
  endfacet\
  facet normal 1.000000 0.000000 0.000000\
    outer loop\
      vertex 5.000000 5.000000 10.000000\
      vertex 5.000000 0.867767 6.801938\
      vertex 5.000000 1.949856 5.445042\
    endloop\
  endfacet\
  facet normal 1.000000 0.000000 0.000000\
    outer loop\
      vertex 5.000000 -1.949856 5.445042\
      vertex 5.000000 -0.867767 6.801938\
      vertex 5.000000 -5.000000 10.000000\
    endloop\
  endfacet\
endsolid OpenSCAD_Model\
';