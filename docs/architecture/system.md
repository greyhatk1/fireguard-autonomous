# FireGuard System Architecture

## Purpose
FireGuard is a software-first wildfire fuel-management platform for inspecting properties, assessing vegetation/fuel risk, planning maintenance missions, coordinating simulated/physical robots, and verifying completed work.

## Architecture principles
- Modular services with explicit contracts.
- Simulation first; physical robotics comes later.
- AI recommends and analyzes; deterministic safety and robotics layers validate execution.
- No direct LLM-to-motor control.
- Human authorization for actions designated as approval-required.
- Robot hardware is accessed through adapters so simulation and physical platforms can be swapped.
- Every module has tests and documentation.

## High-level flow
Drone/ground observations -> Vision -> Risk -> Mission -> Safety/Authorization -> Fleet -> Robot Adapter -> Robot.
Verification feeds results back into the property/risk history.

## Initial technology direction
Use a conventional web/API stack for the MVP. Evaluate ROS 2/Nav2 and Open-RMF for the robotics/simulation layer as the project reaches autonomous robotics integration. Do not hard-couple the web platform to a single robot vendor.

## Trust boundaries
AI output is untrusted input. Safety validation, authorization, geofencing, and robot-control boundaries must remain independent of LLM reasoning.
