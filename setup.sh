#!/bin/bash

#First we kill all running containers
echo "Killing containers..."
docker kill $(docker ps -a -q)

#Delete containers
echo "Pruning containers..."
docker system prune -a -f
