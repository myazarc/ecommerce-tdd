import request from "supertest";
import app from "../src/app";

describe("UserService /user", () => {
  it("POST /register => created user", () => {
    return request(app)
      .post("/user/register")
      .send({
        username: "test",
        password: "test",
        email: "test@example.ext",
      })
      .expect(201);
  });

  it("POST /login => created token", () => {
    return request(app)
      .post("/user/login")
      .send({
        username: "test",
        password: "test",
      })
      .expect(200)
      .expect((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            token: expect.any(String),
            success: expect.any(Boolean),
          })
        );
      });
  });

  it("GET /confirmation/:usermailtoken => approved user mail", () => {
    return request(app)
      .get("/user/confirmation/test_approve_email_key")
      .expect(200)
      .expect((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            success: true,
          })
        );
      });
  });

  it("GET /me => logged in user data", () => {
    return request(app)
      .get("/user/me")
      .expect(200)
      .expect((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            username: "test",
            email: "test@example.ext",
          })
        );
      });
  });

  it("POST /add_cart => added cart", () => {
    return request(app)
      .post("/user/add_cart")
      .send({
        productId: 1,
      })
      .expect(201);
  });

  it("PATCH /update_cart => updated cart", () => {
    return request(app)
      .patch("/user/update_cart")
      .send([
        {
          productId: 1,
          quantity: 5,
        },
      ])
      .expect(204);
  });

  it("DELETE /clear_cart => removed cart", () => {
    return request(app).delete("/user/clear_cart").expect(204);
  });
});
