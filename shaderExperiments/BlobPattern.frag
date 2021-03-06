void main () {
    vec2 uv = uv();
    vec2 uvN = uvN();
    vec3 c = black;
    
    vec2 uu = cos((uv) * (10.* bands.z));
    vec2 vv =  sin((uv) * (10.* bands.y));
    float y = snoise(uu * mod(time * .2, 1.) );
    float x = snoise(vv * mod(time * .5, 1.));
    
    c = cos(blue  * y  * .0025 * time * bands.w + 1. );
    c += sin(red  * x  * .0015 * time * bands.z + .5 );
    
    c = step(.95, c);
    
	gl_FragColor = vec4(c, 1.0);
}