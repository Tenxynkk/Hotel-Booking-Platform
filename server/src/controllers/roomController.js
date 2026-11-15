const getRooms = (req, res) => {
  res.json({
    success: true,
    message: "Room list endpoint is ready",
    data: []
  });
};

const getRoomById = (req, res) => {
  res.json({
    success: true,
    message: "Room details endpoint is ready",
    data: { id: req.params.id }
  });
};

const createRoom = (req, res) => {
  res.status(201).json({
    success: true,
    message: "Room creation endpoint is ready",
    data: req.body
  });
};

const updateRoom = (req, res) => {
  res.json({
    success: true,
    message: "Room update endpoint is ready",
    data: {
      ...req.body,
      id: req.params.id
    }
  });
};

const deleteRoom = (req, res) => {
  res.json({
    success: true,
    message: "Room deletion endpoint is ready",
    data: { id: req.params.id }
  });
};

module.exports = {
  getRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom
};
