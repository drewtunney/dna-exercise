describe("DNA", function(){

  it("reverse complements can be set", function(){

    var octet = "GCTCGATC"
    expect(reverseComplement(octet)).toEqual("CGAGCTAG");

  });

});