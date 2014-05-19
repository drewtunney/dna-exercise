describe("DNA", function(){

  it("reverse complements can be set", function(){

    var octet = "GCTCGATCAT"
    expect(reverseComplement(octet)).toEqual("ATGATCGAGC");

  });

  it("returns all possible unique octets for bases G, C, A, T", function(){
    expect(uniqueBaseOctets()).toEqual((Math.pow(4, 8)))
  })

});