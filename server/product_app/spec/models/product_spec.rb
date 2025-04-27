require 'rails_helper'

RSpec.describe Product, type: :model do
  it "is valid with all attributes" do
    product = Product.new(
      name: "Car",
      description: "A Car",
      price: "100",
      available: true
    )
    expect(product).to be_valid
  end
end

RSpec.describe Product, type: :model do
  it "is invalid when missing name" do
    product = Product.new(
      description: "A Car",
      price: "100",
      available: true
    )
    expect(product).not_to be_valid
  end
end