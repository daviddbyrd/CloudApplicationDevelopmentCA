require 'rails_helper'

RSpec.describe ProductsController, type: :controller do
  describe "GET #index" do
    it "returns success response" do
      get :index
      expect(response).to have_http_status(:ok)
    end
  end

  describe "GET #show" do
    let (:product) do
      Product.create!(
        name: "Car", 
        description: "A Car.",
        price: 100,
        available: true
      )
    end

    it "returns success response" do
      get :show, params: { id: product.id }
      expect(response).to have_http_status(:ok)
    end
  end

  describe "POST" do
    context "with valid params" do
      it "creates new Product" do
        expect {
          post :create, params: {
            product: {
              name: "Car", 
              description: "A Car.",
              price: 100,
              available: true
            }
          }        
        }.to change(Product, :count).by(1)
      end
    end

    context "with invalid params" do
      it "fails to create new Product" do
        expect {
          post :create, params: {
            product: {
              name: "",
              description: "A Car.",
              price: 100,
              available: true
            }
          }
        }.not_to change(Product, :count)
      end
    end
  end

  describe "PATCH #update" do
    product = Product.create!(
      name: "Car", 
      description: "A Car.",
      price: 100,
      available: true
    )
     

    context "with valid parameters" do
      it "updates the requested product" do
        patch :update, params: { id: product.id, product: {
          name: "Bigger Car", 
          description: "A car.",
          price: 100,
          available: true
        } }
        product.reload
        expect(product.name).to eq("Bigger Car")
      end
    end

    context "with invalid parameters" do
      it "does not update the product" do
        patch :update, params: { id: product.id, product: {
          name: "", 
          description: "A Car.",
          price: 100,
          available: true
        } }
        product.reload
        expect(product.name).to eq("Car") 
      end
    end
  end
 
  describe "DELETE #destroy" do
    it "destroys the requested product" do
      product = Product.create!(
        name: "Car", 
        description: "A Car.",
        price: 100,
        available: true
      )
      expect {
        delete :destroy, params: { id: product.id }
      }.to change(Product, :count).by(-1)
    end
  end
end