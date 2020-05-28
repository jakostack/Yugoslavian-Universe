THREE.MeshNormalMaterial = function ( parameters ) {
	
	
	if(parameters){
		this.shadingColor = parameters.shadingColor
	}
	
	if(this.shadingColor && !THREE.ShaderLib[this.shadingColor]){
		assignNewShader(this.shadingColor);
	}
	
	THREE.Material.call( this, parameters );
	this.shading = THREE.FlatShading;
	this.wireframe = false;
	this.wireframeLinewidth = 1;
	this.setValues( parameters );

};

THREE.MeshNormalMaterial.prototype = Object.create( THREE.Material.prototype );

THREE.MeshNormalMaterial.prototype.clone = function () {
	var material = new THREE.MeshNormalMaterial();
	THREE.Material.prototype.clone.call( this, material );

	material.shading = this.shading;

	material.wireframe = this.wireframe;
	material.wireframeLinewidth = this.wireframeLinewidth;

	return material;

};

//ADDS A NEW SHADER TO THE THREE LIB BASED ON THE COLOR GIVIEN
function assignNewShader(color){
	var colorAssign = new THREE.Color(color)
	
	THREE.ShaderLib[color] = {
		
		uniforms: {

			"opacity" : { type: "f", value: 1.0 },
			"color" : { type: "c", value: colorAssign },
			

		},

		vertexShader: [

			"varying vec3 vNormal;",

			"void main() {",

				"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
				"vNormal = normalMatrix * normal;",

				"gl_Position = projectionMatrix * mvPosition;",

			"}"

		].join("\n"),

		fragmentShader: [

			"uniform float opacity;",
			"varying vec3 vNormal;",
			"uniform vec3 color;",
			"void main() {",
				
				"gl_FragColor = vec4( color.r + (vNormal.x*color.r)*.5, color.g + (vNormal.y*color.g)*.5, color.b + (vNormal.z*color.b)*.5,opacity );",

			"}"

		].join("\n")

	}
	
	
}

/*
'normal': {

		uniforms: {

			"opacity" : { type: "f", value: 1.0 }

		},

		vertexShader: [

			"varying vec3 vNormal;",

			"void main() {",

				"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
				"vNormal = normalize( normalMatrix * normal );",

				"gl_Position = projectionMatrix * mvPosition;",

			"}"

		].join("\n"),

		fragmentShader: [

			"uniform float opacity;",
			"varying vec3 vNormal;",

			"void main() {",

				"gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",

			"}"

		].join("\n")

},
*/