#!/bin/bash

# Stop all servers and start the server as a daemon
cd /home/ubuntu/carhoot-dashboard
sudo cp .env.production .env
sudo killall -9 node || true
sudo nohup bash -c 'yarn start:production' &
(sleep 3; echo; sleep 3)
