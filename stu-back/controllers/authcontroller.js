

const signupcontroller = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    return res.status(200).json({
      message: "Data received successfully",
      data: body
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server error" });
  }
};

export default signupcontroller;
