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
  it "is invalid without name" do
    product = Product.new(
      description: "A Car",
      price: "100",
      available: true
    )
    expect(product).not_to be_valid
  end
end

RSpec.describe Product, type: :model do
  it "is invalid without description" do
    product = Product.new(
      name: "Car",
      price: "100",
      available: true
    )
    expect(product).not_to be_valid
  end
end

RSpec.describe Product, type: :model do
  it "is invalid without price" do
    product = Product.new(
      name: "Car",
      description: "A Car",
      available: true
    )
    expect(product).not_to be_valid
  end
end

RSpec.describe Product, type: :model do
  it "is invalid without available attribute" do
    product = Product.new(
      name: "Car",
      description: "A Car",
      price: 100
    )
    expect(product).not_to be_valid
  end
end

RSpec describe Product, type: :model do
  it "is invalid if it had additional attributes" do
    product = Product.new(
      name: "Car",
      description: "A Car",
      price: 100,
      available: true
      location: "Dublin"
    )